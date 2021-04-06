## [28. Implement strStrs()](https://leetcode.com/problems/implement-strstr/description/)

### Problem: 

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

Example 1:

```
Input: haystack = "hello", needle = "ll"
Output: 2
```

Example 2:

```
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```

Example 3:

```
Input: haystack = "", needle = ""
Output: 0
```

### Solutions:

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let place = haystack.indexOf(needle);
    if(needle = "") {
        return 0;
    }
    else {
        return place;
    }
};
```

### Difficulty:

Easy

### Related Topics:

https://leetcode.com/tag/two-pointers/

https://leetcode.com/tag/string/

### Similar Questions:

https://leetcode.com/problems/shortest-palindrome/

https://leetcode.com/problems/repeated-substring-pattern/