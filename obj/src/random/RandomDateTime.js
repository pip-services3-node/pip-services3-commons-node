"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomDateTime = void 0;
/** @module random */
var RandomInteger_1 = require("./RandomInteger");
/**
 * Random generator for Date time values.
 *
 * ### Example ###
 *
 *     let value1 = RandomDateTime.nextDate(new Date(2010,0,1));    // Possible result: 2008-01-03
 *     let value2 = RandomDateTime.nextDateTime(new Date(2017,0.1));// Possible result: 2007-03-11 11:20:32
 *     let value3 = RandomDateTime.updateDateTime(new Date(2010,1,2));// Possible result: 2010-02-05 11:33:23
 */
var RandomDateTime = /** @class */ (function () {
    function RandomDateTime() {
    }
    /**
     * Generates a random Date in the range ['minYear', 'maxYear'].
     * This method generate dates without time (or time set to 00:00:00)
     *
     * @param min   (optional) minimum range value
     * @param max   max range value
     * @returns     a random Date value.
     */
    RandomDateTime.nextDate = function (min, max) {
        if (max === void 0) { max = null; }
        if (max == null) {
            max = min;
            min = new Date(max.getFullYear() - 10, 1, 1);
        }
        var diff = max.getTime() - min.getTime();
        if (diff <= 0)
            return min;
        var time = min.getTime() + RandomInteger_1.RandomInteger.nextInteger(0, diff);
        var date = new Date(time);
        return new Date(date.getFullYear(), date.getMonth(), date.getDay());
    };
    /**
     * Generates a random Date and time in the range ['minYear', 'maxYear'].
     * This method generate dates without time (or time set to 00:00:00)
     *
     * @param min   (optional) minimum range value
     * @param max   max range value
     * @returns     a random Date and time value.
     */
    RandomDateTime.nextDateTime = function (min, max) {
        if (max === void 0) { max = null; }
        if (max == null) {
            max = min;
            min = new Date(2000, 0, 1);
        }
        var diff = max.getTime() - min.getTime();
        if (diff <= 0)
            return min;
        var time = min.getTime() + RandomInteger_1.RandomInteger.nextInteger(0, diff);
        return new Date(time);
    };
    /**
     * Updates (drifts) a Date value within specified range defined
     *
     * @param value     a Date value to drift.
     * @param range     (optional) a range in milliseconds. Default: 10 days
     */
    RandomDateTime.updateDateTime = function (value, range) {
        if (range === void 0) { range = null; }
        range = range != 0 && range != null ? range : 10 * 24 * 3600000;
        if (range < 0)
            return value;
        var time = value.valueOf() + RandomInteger_1.RandomInteger.nextInteger(-range, range);
        return new Date(time);
    };
    return RandomDateTime;
}());
exports.RandomDateTime = RandomDateTime;
//# sourceMappingURL=RandomDateTime.js.map