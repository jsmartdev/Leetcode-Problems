/* eslint-disable */

/**
 * @param {number} x
 * @return {number}
 */

let x = 33333333333;

var reverse = function(x) {
    let integer = x.toString().split('').reverse().join('');
    console.log(x);
    if(integer < -2147483648 || integer > 2147483647) {
        return 0;
    }
    else {
        return integer;
    }
};

reverse();

