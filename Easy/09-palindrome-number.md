## [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/description/)

### Problem:

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

**Example 1:**

```
Input: 121
Output: true
```

**Example 2:**

```
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

**Example 3:**

```
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

### Solution(s):

#### Solution A

Easy to write but slow since it generates an array.

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return x == String(x).split('').reverse().join('')
};
```

#### Solution B

**Follow up:**
Coud you solve it without converting the integer to a string?

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) { return false }
  return x === reverse(x)
};

/**
 * @param {number} x
 * @return {number}
 */
function reverse (x) {
  let result = 0
  while (x) {
    result = result * 10 + x % 10
    x = x / 10 | 0
  }
  return result
};
```

### Difficulty: 

Easy

### Related Topics:
  
"Math": https://leetcode.com/tag/math
