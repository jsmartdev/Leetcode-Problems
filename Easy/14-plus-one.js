/* eslint-disable */
/*
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // add 1 to the number in the last index of digits
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    // create a loop to iterate  backwards through digits down to the second index
    for(i = digits.length - 1; i >= 1; i--) {
        // if the current index is greater than 9, change the value of current index to 0 and add 1 to the next index down
        if(digits[i] > 9) {
            digits[i] = 0;
            digits[i - 1] = digits[i - 1] + 1;
        };
    };
    // if the first index (or index 0) is greater than 9, change the value of index 0 to 0
    // and use the unshift method to create a new index onto the front (new index 0) which is equal to 1
    if(digits[0] > 9) {
        digits[0] = 0;
        digits.unshift(1);
    }
    return digits;
};