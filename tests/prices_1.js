import moment from 'moment-timezone';
const expect = require("chai").expect;
import {PriceApi, heating} from "../lib";
const pricesLib = new PriceApi();


let _prices = undefined;

moment.tz.setDefault('Europe/Oslo');

const getPrices = function () {
    if (_prices) {
        const aDate = moment('2019-01-20T23:00:00.000Z');
        for (let p of _prices) {
            expect(p.startsAt.toISOString()).to.equal( aDate.toISOString());
            aDate.add(1, 'hour');
        }
        expect(_prices.length).to.equal(48);
        return _prices;
    }
    const prices = [
        {
            startsAt: '2019-01-20T23:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.49599
        },
        {
            startsAt: '2019-01-21T00:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.49103
        },
        {
            startsAt: '2019-01-21T01:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.48919
        },
        {
            startsAt: '2019-01-21T02:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.48987
        },
        {
            startsAt: '2019-01-21T03:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.4955
        },
        {
            startsAt: '2019-01-21T04:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.52078
        },
        {
            startsAt: '2019-01-21T05:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.53604
        },
        {
            startsAt: '2019-01-21T06:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.60264
        },
        {
            startsAt: '2019-01-21T07:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.63073
        },
        {
            startsAt: '2019-01-21T08:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.60176
        },
        {
            startsAt: '2019-01-21T09:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.56754
        },
        {
            startsAt: '2019-01-21T10:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.55704
        },
        {
            startsAt: '2019-01-21T11:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.55344
        },
        {
            startsAt: '2019-01-21T12:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.55315
        },
        {
            startsAt: '2019-01-21T13:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.55772
        },
        {
            startsAt: '2019-01-21T14:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.56385
        },
        {
            startsAt: '2019-01-21T15:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.58008
        },
        {
            startsAt: '2019-01-21T16:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.59671
        },
        {
            startsAt: '2019-01-21T17:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.57979
        },
        {
            startsAt: '2019-01-21T18:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.54868
        },
        {
            startsAt: '2019-01-21T19:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.53634
        },
        {
            startsAt: '2019-01-21T20:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.53264
        },
        {
            startsAt: '2019-01-21T21:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.52185
        },
        {
            startsAt: '2019-01-21T22:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.50902
        },
        {
            startsAt: '2019-01-21T23:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.49599
        },
        {
            startsAt: '2019-01-22T00:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.49103
        },
        {
            startsAt: '2019-01-22T01:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.48919
        },
        {
            startsAt: '2019-01-22T02:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.48987
        },
        {
            startsAt: '2019-01-22T03:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.4955
        },
        {
            startsAt: '2019-01-22T04:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.52078
        },
        {
            startsAt: '2019-01-22T05:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.53604
        },
        {
            startsAt: '2019-01-22T06:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.60264
        },
        {
            startsAt: '2019-01-22T07:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.63073
        },
        {
            startsAt: '2019-01-22T08:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.60176
        },
        {
            startsAt: '2019-01-22T09:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.56754
        },
        {
            startsAt: '2019-01-22T10:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.55704
        },
        {
            startsAt: '2019-01-22T11:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.55344
        },
        {
            startsAt: '2019-01-22T12:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.55315
        },
        {
            startsAt: '2019-01-22T13:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.55772
        },
        {
            startsAt: '2019-01-22T14:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.56385
        },
        {
            startsAt: '2019-01-22T15:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.58008
        },
        {
            startsAt: '2019-01-22T16:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.59671
        },
        {
            startsAt: '2019-01-22T17:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.57979
        },
        {
            startsAt: '2019-01-22T18:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.54868
        },
        {
            startsAt: '2019-01-22T19:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.53634
        },
        {
            startsAt: '2019-01-22T20:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.53264
        },
        {
            startsAt: '2019-01-22T21:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.52185
        },
        {
            startsAt: '2019-01-22T22:00:00.000Z',
            priceArea: 'Bergen',
            currency: 'NOK',
            price: 0.50902
        }
    ];
    const timeZone = moment().tz();
    _prices = prices
      .map(p => {
          const startsAt = moment.tz(p.startsAt, 'UTC').tz(timeZone);
          const time = startsAt.unix();
          const price = p.price;
          return { startsAt, time, price };
      });
    return _prices;
};

const getState = function (atHome) {
    return {
        atHome: atHome,
        homeOverride: false,
        heatingOptions: {
            workday: {
                startHour: 5,
                endHour: 22.5,
            },
            notWorkday: {
                startHour: 7,
                endHour: 23,
            },
            workHours: {
                startHour: 7,
                endHour: 14
            },
            country: 'NO'
        }
    };
};

const checkLowPrice = function (aDate, aTime, numRows) {
    it("Low price at " + aTime, function () {
        let x = pricesLib.pricesStarting(getPrices(), moment(aDate), 0, 24);
        expect(pricesLib.checkLowPrice(x, 18, moment(aDate + 'T' + aTime)).length).to.equal(numRows);
    });
};

const checkHighPrice = function (aDate, aTime, state, numRows) {
    it("High price at " + aTime, function () {
        let x = pricesLib.pricesStarting(getPrices(), moment(aDate), 0, 24);
        expect(pricesLib.checkHighPrice2(x, 6, moment(aDate + 'T' + aTime), state).length).to.equal(numRows);
    });
};

describe("Prices", function () {

    before(function() {
        moment.tz.setDefault('Europe/Oslo');
    });

    describe("Check testdata", function () {
        it("48 hours", function () {
            const prcs = getPrices();
            //console.log(prcs);
            expect(prcs.length).to.equal(48);
        });
    });

    describe("Check no date change", function () {
        it("No date change: toHour", function () {
            const aDate = moment('2019-01-21T03:12:45.678Z');
            pricesLib.toHour(aDate);
            expect(aDate.toISOString()).to.equal('2019-01-21T03:12:45.678Z');
        });
        it("No date change: currentPrice", function () {
            const aDate = moment('2019-01-21T03:12:45.678Z');
            pricesLib.currentPrice(getPrices(), aDate);
            expect(aDate.toISOString()).to.equal('2019-01-21T03:12:45.678Z');
        });
        it("No date change: priceRatio", function () {
            const aDate = moment('2019-01-21T03:12:45.678Z');
            pricesLib.priceRatio(getPrices(), aDate);
            expect(aDate.toISOString()).to.equal('2019-01-21T03:12:45.678Z');
        });
        it("No date change: pricesStarting", function () {
            const aDate = moment('2019-01-21T03:12:45.678Z');
            pricesLib.pricesStarting(getPrices(), aDate, 0, 24);
            expect(aDate.toISOString()).to.equal('2019-01-21T03:12:45.678Z');
        });
        it("No date change: averagePricesStarting", function () {
            const aDate = moment('2019-01-21T03:12:45.678Z');
            pricesLib.averagePricesStarting(getPrices(), aDate, 0, 24);
            expect(aDate.toISOString()).to.equal('2019-01-21T03:12:45.678Z');
        });
        it("No date change: checkLowPrice", function () {
            const aDate = moment('2019-01-21T03:12:45.678Z');
            const prcs = getPrices();
            pricesLib.checkLowPrice(prcs, 4, aDate);
            expect(aDate.toISOString()).to.equal('2019-01-21T03:12:45.678Z');
        });
        it("No date change: checkHighPrice", function () {
            const aDate = moment('2019-01-21T03:12:45.678Z');
            pricesLib.checkHighPrice(getPrices(), 6, aDate);
            expect(aDate.toISOString()).to.equal('2019-01-21T03:12:45.678Z');
        });
        it("No date change: checkHighPrice2", function () {
            const aDate = moment('2019-01-21T03:12:45.678Z');
            const state = getState(true);
            pricesLib.checkHighPrice2(getPrices(), 6, aDate, state);
            expect(aDate.toISOString()).to.equal('2019-01-21T03:12:45.678Z');
        });
        it("No date change: pricesAmongLowest", function () {
            const aDate = moment('2019-01-21T03:12:45.678Z');
            pricesLib.pricesAmongLowest(getPrices(), aDate, 0, 4, 2);
            expect(aDate.toISOString()).to.equal('2019-01-21T03:12:45.678Z');
        });
        it("No date change: pricesAmongHighest", function () {
            const aDate = moment('2019-01-21T03:12:45.678Z');
            pricesLib.pricesAmongHighest(getPrices(), aDate, 0, 4, 2);
            expect(aDate.toISOString()).to.equal('2019-01-21T03:12:45.678Z');
        });
    });

    describe("Check no prices", function () {
        it("No prices: pricesStarting", function () {
            expect(pricesLib.pricesStarting([], moment('2019-01-21'), 0, 24).length).to.equal(0);
        });
        it("No prices: checkLowPrice", function () {
            expect(pricesLib.checkLowPrice([], 18, moment('2019-01-21')).length).to.equal(0);
        });
        it("No prices: checkHighPrice", function () {
            expect(pricesLib.checkHighPrice2([], 6, moment('2019-01-21'), {}).length).to.equal(0);
        });
    });

    describe("Price level", function () {
        it("Price level 2019-01-21: 24 hours", function () {
            const priceLevel = pricesLib.priceLevel(getPrices(), moment('2019-01-21'));
            expect(priceLevel.code).eq('NORMAL');
            expect(priceLevel.description).eq('The price is greater than 90 % and smaller than 115 % compared to average price.');
        });
        it("Price level 2019-01-21T07:00:00.000Z: 24 hours", function () {
            const priceLevel = pricesLib.priceLevel(getPrices(), moment('2019-01-21T07:00:00.000Z'));
            expect(priceLevel.code).eq('EXPENSIVE');
        });
        it("Price level 2019-01-22T10:00:00.000Z: 24 hours", function () {
            const priceLevel = pricesLib.priceLevel(getPrices(), moment('2019-01-22T10:00:00.000Z'));
            expect(priceLevel.code).eq('NORMAL');
        });
        it("Price level 2019-01-22T15:00:00.000Z: 24 hours", function () {
            const priceLevel = pricesLib.priceLevel(getPrices(), moment('2019-01-22T15:00:00.000Z'));
            expect(priceLevel.code).eq('NORMAL');
        });
    });

    describe("Price ratio", function () {
        it("Price ratio 2019-01-21: 24 hours", function () {
            expect(pricesLib.priceRatio(getPrices(), moment('2019-01-21'))).to.equal(0.826087);
        });
        it("Price ratio 2019-01-21T01:00:00.000Z: 24 hours", function () {
            expect(pricesLib.priceRatio(getPrices(), moment('2019-01-21T01:00:00.000Z'))).to.equal(1.0);
        });
        it("Price ratio 2019-01-21T07:00:00.000Z: 24 hours", function () {
            expect(pricesLib.priceRatio(getPrices(), moment('2019-01-21T07:00:00.000Z'))).to.equal(0.0);
        });
        it("Price ratio 2019-01-21T10:00:00.000Z: 24 hours", function () {
            expect(pricesLib.priceRatio(getPrices(), moment('2019-01-21T10:00:00.000Z'))).to.equal(0.391304);
        });
        it("Price ratio 2019-01-22: 24 hours", function () {
            expect(pricesLib.priceRatio(getPrices(), moment('2019-01-22'))).to.equal(0.826087);
        });
    });

    describe("Prices next hours", function () {
        it("2019-01-21: 24 hours", function () {
            const forDay = moment('2019-01-21').startOf('day');
            const prcs = pricesLib.pricesStarting(getPrices(), forDay, 0, 24)
            expect(prcs.length).to.equal(24);
            //expect(pricesLib.pricesStarting(getPrices(), moment('2019-01-21'), 0, 24).length).to.equal(24);
        });
        it("2019-01-22: 24 hours", function () {
            expect(pricesLib.pricesStarting(getPrices(), moment('2019-01-22'), 0, 24).length).to.equal(24);
        });
        it("2019-01-21T10:00:00: 20 hours", function () {
            let prices = pricesLib.pricesStarting(getPrices(), moment('2019-01-21'), 10, 20);
            expect(prices.length).to.equal(20);
            expect(prices[0].startsAt.format()).to.equal('2019-01-21T10:00:00+01:00');
            expect(prices[prices.length - 1].startsAt.format()).to.equal('2019-01-22T05:00:00+01:00');
        });
        it("2019-01-23: 0 hours", function () {
            expect(pricesLib.pricesStarting(getPrices(), moment('2019-01-23'), 0, 24).length).to.equal(0);
        });
    });

    describe("Check low price", function () {
        checkLowPrice('2019-01-21', '00:00:00', 1);
        checkLowPrice('2019-01-21', '01:00:00', 1);
        checkLowPrice('2019-01-21', '02:00:00', 1);
        checkLowPrice('2019-01-21', '03:00:00', 1);
        checkLowPrice('2019-01-21', '04:00:00', 1);
        checkLowPrice('2019-01-21', '05:00:00', 1);
        checkLowPrice('2019-01-21', '06:00:00', 1);
        checkLowPrice('2019-01-21', '06:59:59', 1);
        checkLowPrice('2019-01-21', '07:00:00', 0);
        checkLowPrice('2019-01-21', '08:00:00', 0);
        checkLowPrice('2019-01-21', '09:00:00', 0);
        checkLowPrice('2019-01-21', '10:00:00', 1);
        checkLowPrice('2019-01-21', '11:00:00', 1);
        checkLowPrice('2019-01-21', '12:00:00', 1);
        checkLowPrice('2019-01-21', '13:00:00', 1);
        checkLowPrice('2019-01-21', '14:00:00', 1);
        checkLowPrice('2019-01-21', '15:00:00', 1);
        checkLowPrice('2019-01-21', '16:00:00', 0);
        checkLowPrice('2019-01-21', '17:00:00', 0);
        checkLowPrice('2019-01-21', '18:00:00', 0);
        checkLowPrice('2019-01-21', '19:00:00', 1);
        checkLowPrice('2019-01-21', '20:00:00', 1);
        checkLowPrice('2019-01-21', '21:00:00', 1);
        checkLowPrice('2019-01-21', '22:00:00', 1);
        checkLowPrice('2019-01-21', '23:00:00', 1);
    });

    describe("Check high price - working day - home", function () {
        let state = getState(true);
        checkHighPrice('2019-01-21', '00:00:00', state, 1);
        checkHighPrice('2019-01-21', '01:00:00', state, 0);
        checkHighPrice('2019-01-21', '02:00:00', state, 0);
        checkHighPrice('2019-01-21', '03:00:00', state, 0);
        checkHighPrice('2019-01-21', '04:00:00', state, 1);
        checkHighPrice('2019-01-21', '05:00:00', state, 0);
        checkHighPrice('2019-01-21', '06:00:00', state, 0);
        checkHighPrice('2019-01-21', '07:00:00', state, 0);
        checkHighPrice('2019-01-21', '08:00:00', state, 1);
        checkHighPrice('2019-01-21', '09:00:00', state, 0);
        checkHighPrice('2019-01-21', '10:00:00', state, 1);
        checkHighPrice('2019-01-21', '11:00:00', state, 0);
        checkHighPrice('2019-01-21', '12:00:00', state, 1);
        checkHighPrice('2019-01-21', '13:00:00', state, 0);
        checkHighPrice('2019-01-21', '14:00:00', state, 0);
        checkHighPrice('2019-01-21', '15:00:00', state, 0);
        checkHighPrice('2019-01-21', '16:00:00', state, 0);
        checkHighPrice('2019-01-21', '17:00:00', state, 0);
        checkHighPrice('2019-01-21', '18:00:00', state, 0);
        checkHighPrice('2019-01-21', '19:00:00', state, 0);
        checkHighPrice('2019-01-21', '20:00:00', state, 0);
        checkHighPrice('2019-01-21', '21:00:00', state, 0);
        checkHighPrice('2019-01-21', '22:00:00', state, 0);
        checkHighPrice('2019-01-21', '23:00:00', state, 1);
    });

    describe("Check high price - working day - away", function () {
        let state = getState(false);
        checkHighPrice('2019-01-21', '00:00:00', state, 0);
        checkHighPrice('2019-01-21', '01:00:00', state, 0);
        checkHighPrice('2019-01-21', '02:00:00', state, 0);
        checkHighPrice('2019-01-21', '03:00:00', state, 0);
        checkHighPrice('2019-01-21', '04:00:00', state, 0);
        checkHighPrice('2019-01-21', '05:00:00', state, 0);
        checkHighPrice('2019-01-21', '06:00:00', state, 0);
        checkHighPrice('2019-01-21', '07:00:00', state, 0);
        checkHighPrice('2019-01-21', '08:00:00', state, 1);
        checkHighPrice('2019-01-21', '09:00:00', state, 0);
        checkHighPrice('2019-01-21', '10:00:00', state, 1);
        checkHighPrice('2019-01-21', '11:00:00', state, 0);
        checkHighPrice('2019-01-21', '12:00:00', state, 1);
        checkHighPrice('2019-01-21', '13:00:00', state, 0);
        checkHighPrice('2019-01-21', '14:00:00', state, 1);
        checkHighPrice('2019-01-21', '15:00:00', state, 0);
        checkHighPrice('2019-01-21', '16:00:00', state, 1);
        checkHighPrice('2019-01-21', '17:00:00', state, 0);
        checkHighPrice('2019-01-21', '18:00:00', state, 1);
        checkHighPrice('2019-01-21', '19:00:00', state, 0);
        checkHighPrice('2019-01-21', '20:00:00', state, 0);
        checkHighPrice('2019-01-21', '21:00:00', state, 0);
        checkHighPrice('2019-01-21', '22:00:00', state, 0);
        checkHighPrice('2019-01-21', '23:00:00', state, 0);
    });

});