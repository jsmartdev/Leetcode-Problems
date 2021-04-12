## [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

### Problem:

Given two sorted integer arrays **nums1** and **nums2**, merge **nums2** into **nums1** as one sorted array.

The number of elements initialized in **nums1** and **nums2** are **m** and **n** respectively. You may assume that **nums1** has a size equal to **m + n** such that it has enough space to hold additional elements from **nums2**.

**Example 1:**

```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
```

**Example 2:**

```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
```

### Solutions:

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    while(n) {
    nums1[m++]=nums2[--n];
    };
    nums1.sort((a,b) => a-b);
};
```

### Related Topics:

**[Array](https://leetcode.com/tag/array/)**

**[Two Pointers](https://leetcode.com/tag/two-pointers/)**

### Similar Questions:

**[Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)**

**[Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)**

**[Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)**