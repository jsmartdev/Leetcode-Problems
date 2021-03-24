/* eslint-disable */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    if (digits[digits.length - 1] > 9) {
        digits[digits.length - 1] = 0;
        digits[digits.length - 2] = digits[digits.length - 2] + 1;
        if(!digits[digits.length - 2]) {
       digits.splice(digits.length - 2, 0, 1)
      }
    }
    return digits;
};