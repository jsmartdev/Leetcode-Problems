## [1. Two Sum](https://leetcode.com/problems/two-sum/description/)
### Problem:

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the *same* element twice.

**Example:**

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

### Solution(s):

#### Solution A

Map the numbers to their indices as we iterate, so that we can look them back up in O(1) time complexity.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const indicies = {}
  
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (indicies[target - num] != null) {
      return [indicies[target - num], i]
    }
    indicies[num] = i
  }
};
```
#### Solution B

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // create a loop to iterate through the nums array
    for(i = 0; i < nums.length; i ++) {
        // create a nested loop that iterates through all its assigned indices 
        // for each individual index iterated over by the outer loop
        for(j = i + 1; j < nums.length; j++) {
            //conditional statement declared at every index iterated over by the for loop
            // if index i + index j is equal to target
            if(nums[i] + nums[j] === target) {
                // return indices i and j
                return [i, j];
            }  
        }
    }
}; 
```

### Difficulty: 

**Easy**

### Related Topics: 

**[Array](https://leetcode.com/tag/array)** 
**[Hash Table](https://leetcode.com/tag/hash-table)**

### Similar Questions:

**[3Sum](https://leetcode.com/problems/3sum/)**
**[4Sum](https://leetcode.com/problems/4sum/)**
**[Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)**
**[Two Sum III](https://leetcode.com/problems/two-sum-iii-data-structure-design/)**
**[Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)**
**[Two Sum IV](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)**
**[Two Sum Less Than K](https://leetcode.com/problems/two-sum-less-than-k/)**
**[Max Number of K-Sum Pairs](https://leetcode.com/problems/max-number-of-k-sum-pairs/)**
**[Count Good Meals](https://leetcode.com/problems/count-good-meals/)**
