/* eslint-disable */
/*
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    for(i = digits.length - 1; i >= 1; i--) {
        if(digits[i] > 9) {
            digits[i] = 0;
            digits[i - 1] = digits[i - 1] + 1;
        };
    };
    if(digits[0] > 9) {
        digits[0] = 0;
        digits.unshift(1);
    }
    return digits;
};