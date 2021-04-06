/* eslint-disable */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // get square root of x
    sqrRoot = Math.sqrt(x);
    // round number down to get rid of decimal point and numbers to the right of it
    answer = Math.floor(sqrRoot);
    return answer;
};

// more concise and efficient version of same methodology from above solution
var mySqrt = function(x) {
    return Math.trunc(Math.sqrt(x));
};
