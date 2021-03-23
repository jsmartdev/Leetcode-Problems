/* eslint-disable */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let place = haystack.indexOf(needle);
    if(needle = "") {
        return 0;
    }
    else {
        return place;
    }
};