## [Search Insert Position] https://leetcode.com/problems/search-insert-position/description/

### Problem:

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

**Example 1:**

```
Input: nums = [1,3,5,6], target = 5
Output: 2
```

**Example 2:**

```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

**Example 3:**

```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

**Example 4:**

```
Input: nums = [1,3,5,6], target = 0
Output: 0
```


### Solutions:

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // iterate over the nums  sorted array comparing each number to target
    for(i = 0; i < nums.length; i++) {
        // if a given number is greater than or equal to target we return that number's index
        if(nums[i] >= target) {
            return i;
            console.log(i);
        }
    }
    // if we iterate all the way though the array and don't find a number greater than or equal to target we return nums.length
    return nums.length
};
```