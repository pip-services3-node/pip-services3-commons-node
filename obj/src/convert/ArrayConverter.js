"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayConverter = void 0;
/** @module convert */
/** @hidden */
var _ = require('lodash');
/**
 * Converts arbitrary values into array objects.
 *
 * ### Example ###
 *
 *     let value1 = ArrayConverter.toArray([1, 2]);		 // Result: [1, 2]
 *     let value2 = ArrayConverter.toArray(1);			  // Result: [1]
 *     let value2 = ArrayConverter.listToArray("1,2,3");	// Result: ["1", "2", "3"]
 */
var ArrayConverter = /** @class */ (function () {
    function ArrayConverter() {
    }
    /**
     * Converts value into array object.
     * Single values are converted into arrays with a single element.
     *
     * @param value     the value to convert.
     * @returns         array object or null when value is null.
     */
    ArrayConverter.toNullableArray = function (value) {
        // Return null when nothing found
        if (value == null)
            return null;
        // Convert list
        if (_.isArray(value))
            return value;
        // Convert map
        else if (_.isObject(value)) {
            var array = [];
            for (var prop in value)
                array.push(value[prop]);
            return array;
        }
        // Convert single values
        else
            return [value];
    };
    /**
     * Converts value into array object with empty array as default.
     * Single values are converted into arrays with single element.
     *
     * @param value     the value to convert.
     * @returns			array object or empty array when value is null.
     *
     * @see [[toNullableArray]]
     */
    ArrayConverter.toArray = function (value) {
        var result = ArrayConverter.toNullableArray(value);
        return result || [];
    };
    /**
     * Converts value into array object with specified default.
     * Single values are converted into arrays with single element.
     *
     * @param value         the value to convert.
     * @param defaultValue  default array object.
     * @returns				array object or default array when value is null.
     *
     * @see [[toNullableArray]]
     */
    ArrayConverter.toArrayWithDefault = function (value, defaultValue) {
        var result = ArrayConverter.toNullableArray(value);
        return result || defaultValue;
    };
    /**
     * Converts value into array object with empty array as default.
     * Strings with comma-delimited values are split into array of strings.
     *
     * @param value 	the list to convert.
     * @returns			array object or empty array when value is null
     *
     * @see [[toArray]]
     */
    ArrayConverter.listToArray = function (value) {
        if (value == null)
            return [];
        if (_.isString(value))
            value = value.split(',');
        return ArrayConverter.toArray(value);
    };
    return ArrayConverter;
}());
exports.ArrayConverter = ArrayConverter;
//# sourceMappingURL=ArrayConverter.js.map