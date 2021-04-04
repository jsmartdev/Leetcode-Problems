/**
 * @param {number} x
 * @return {number}
 */


var reverse = function(x) {
    let number = Math.abs(x).toString().split('').reverse().join('');
    if(number < -2147483648 || number > 2147483647) {
        return 0;
    }
    else {
        return number * Math.sign(x);
    }
};

reverse();