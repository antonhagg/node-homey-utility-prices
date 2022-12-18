import moment, {Moment, MomentInput} from 'moment-timezone';
import {Holiday, holidays} from '@balmli/homey-public-holidays'

import {HeatingOptions, HeatingResult, HolidayToday, NordpoolPrices} from "./types";

const isDay = function (aDate: Moment, opts: HeatingOptions): boolean {
    let hour = aDate.hour() + aDate.minute() / 60 + aDate.second() / 3600;
    let workdayToday = isWorkDay(aDate, opts);
    let workdayTomorrow = isWorkDay(moment(aDate).add(1, 'day'), opts);
    let startHour = workdayToday ? opts.workday.startHour : opts.notWorkday.startHour;
    let endHour = workdayToday ? opts.workday.endHour : opts.notWorkday.endHour;
    let endHour1 = startHour <= endHour ? 0 : endHour;
    let endHour2 = workdayTomorrow ? (opts.workday.startHour <= opts.workday.endHour ? opts.workday.endHour : 24) :
        (opts.notWorkday.startHour <= opts.notWorkday.endHour ? opts.notWorkday.endHour : 24);

    return hour < endHour1 || hour >= startHour && hour < endHour2;
};

const isWorkDay = function (aDate: Moment, opts: HeatingOptions): boolean {
    return !isHoliday(aDate, opts) && aDate.day() >= 1 && aDate.day() <= 5;
};

const isWorkTime = function (aDate: Moment, opts: HeatingOptions): boolean {
    let hour = aDate.hour() + aDate.minute() / 60 + aDate.second() / 3600;
    return isWorkDay(aDate, opts) &&
        (opts.workHours.startHour <= opts.workHours.endHour ?
            hour >= opts.workHours.startHour && hour < opts.workHours.endHour :
            hour >= opts.workHours.startHour || hour < opts.workHours.endHour);
};

const isHoliday = function (aDate: Moment, opts: HeatingOptions): boolean {
    if (opts.holiday_today === HolidayToday.holiday || opts.holiday_today === HolidayToday.not_holiday) {
        return opts.holiday_today === 'holiday';
    }
    let hd = holidays.isHoliday(opts.country || 'NO', aDate.toDate())
    if (hd === false) {
        return false;
    }
    const hdd = hd as Holiday;
    return (hdd.type === 'public' || hdd.type === 'bank');
};

export const calcHeating = function (aDate: Moment, atHome: boolean, homeOverride: boolean, opts: HeatingOptions): HeatingResult {
    let day = isDay(aDate, opts);
    let night = !day;
    let atWork = isWorkTime(aDate, opts);
    return {
        date: aDate.toISOString(),
        lDate: aDate.format('YYYY-MM-DDTHH:mm:ss'),
        atHome: atHome,
        homeOverride: homeOverride,
        day: day,
        night: night,
        atWork: atWork,
        heating: atHome && !night && !atWork || homeOverride && !night
    }
};

export const checkHighPrice2 = function (prices: NordpoolPrices, high_hours: number, aDate: MomentInput, state: any, filter = true) {
    return prices
        .map(p => {
            // @ts-ignore
            p.heating = calcHeating(p.startsAt, state.atHome, state.homeOverride, state.heatingOptions);
            return p;
        })
        // @ts-ignore
        .filter(p => p.heating.heating === false)
        .filter((p, idx) => idx % 2 === 0)
        .sort((a, b) => b.price - a.price)
        .slice(0, high_hours)
        .filter(p => !filter || filter && p.startsAt.isSameOrBefore(aDate) && moment(p.startsAt).add(1, 'hour').startOf('hour').isAfter(aDate));
};
