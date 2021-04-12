## [66. Plus One](https://leetcode.com/problems/plus-one/)

### Problem: 

Given a **non-empty** array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

**Example 1:**

```
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```

**Example 2:**

```
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```

**Example 3:**

```
Input: digits = [0]
Output: [1]
```

### Solutions:

```javascript
/**
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
```

### Related Topics

**[Array](https://leetcode.com/tag/array/)**

### Similar Questions:

**[Multiply Strings](https://leetcode.com/problems/multiply-strings/)**

**[Add Binary](https://leetcode.com/problems/add-binary/)**

**[Add to Array-Form of Integer](https://leetcode.com/problems/add-to-array-form-of-integer/)**