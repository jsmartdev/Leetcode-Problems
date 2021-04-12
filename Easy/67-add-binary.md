## [67. Add Binary](https://leetcode.com/problems/add-binary/)

### Problems:

Given two binary strings **a** and **b**, return their sum as a binary string.

**Example 1:**

```
Input: a = "11", b = "1"
Output: "100"
```

**Example 2:**

```
Input: a = "1010", b = "1011"
Output: "10101"
```
### Solutions:

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
      // using the BigInt method allows it to correctly perform integer arithmetic 
      //but declaring the type of ('0b' is the binary prefix to convert a string into a Binary Number)
    sum = (BigInt('0b' + a) + BigInt('0b' + b))
    // returns the sum string representing the specified Number object to the radix of 2 ( which is binary)
    return sum.toString(2);
};
```

### Related Topics:

**[Math](https://leetcode.com/tag/math/)**

**[String](https://leetcode.com/tag/string/)**

### Similar Questions:

**[Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)**

**[Multiply Strings](https://leetcode.com/problems/multiply-strings/)**

**[Plus One](https://leetcode.com/problems/plus-one/)**

**[Add to Array-Form of Integer](https://leetcode.com/problems/add-to-array-form-of-integer/)**