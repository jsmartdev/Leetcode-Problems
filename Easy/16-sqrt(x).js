/* eslint-disable */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    sqrRoot = Math.sqrt(x);
    answer = Math.floor(sqrRoot);
    return answer;
};

var mySqrt = function(x) {
    return Math.trunc(Math.sqrt(x));
};
