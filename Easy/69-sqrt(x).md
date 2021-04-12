## [69. Sqrt(x)](https://leetcode.com/problems/sqrtx/)

### Problem:

Given a non-negative integer **x**, compute and return the square root of **x**.

Since the return type is an integer, the decimal digits are **truncated**, and only **the integer part** of the result is returned.

**Example 1:**

```
Input: x = 4
Output: 2
```

**Example 2:**

```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
```

### Solutions:

**Solution 1:**

```javascript
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
```

**Solution 2:**

```javascript
// more concise and efficient version of same methodology from above solution
var mySqrt = function(x) {
    return Math.trunc(Math.sqrt(x));
};
```

### Related Topics:

**[Math](https://leetcode.com/tag/math/)**

**[Binary Search](https://leetcode.com/tag/binary-search/)**

### Similar Questions:

**[Pow(x, n)](https://leetcode.com/problems/powx-n/)**

**[Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/)**