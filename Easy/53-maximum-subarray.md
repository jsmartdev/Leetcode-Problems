## [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

### Problem:

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

**Example 1:**

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```
**Example 2:**

```
Input: nums = [1]
Output: 1
```
**Example 3:**

```
Input: nums = [5,4,-1,7,8]
Output: 23
```

### Solutions:

```javascript
/**
 *  @param {number[]} nums
 *  @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length < 1) return 0;
    let number = nums[0];
    let sum = 0;
    //loop over nums
    for(let i = 0; i < nums.length; i++) {
    //add array to get max
        if (sum > 0) {
            sum += nums[i];
        } 
        else {
        sum = nums[i];
        }
        number = Math.max(sum, number);
    }
    return number;
};
```

### Difficulty:

**Easy**

### Related Topics:

**[Array](https://leetcode.com/tag/array/)**

**[Divide and Conquer](https://leetcode.com/tag/divide-and-conquer/)**

**[Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)**

### Similar Questions:

**[Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)**

**[Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)**

**[Degree of an Array](https://leetcode.com/problems/degree-of-an-array/)**

**[Longest Turbulent Subarray](https://leetcode.com/problems/longest-turbulent-subarray/)**

**[Maximum Absolute Sum of Any Subarray](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/)**

**[Maximum Subarray Sum After One Operation](https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/)**