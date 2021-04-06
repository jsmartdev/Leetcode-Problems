/* eslint-disable */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // declare variable for index where needle occurs within haystack
    // if needle doesn't occur within haystack, place will equal -1
    let place = haystack.indexOf(needle);
    // conditional statement which returns 0 if needle is an empty string
    if(needle = "") {
        return 0;
    }
    // returns the variable place if needle isn't an empty string
    else {
        return place;
    }
};