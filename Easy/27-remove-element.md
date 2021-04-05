


## [27. Remove Element](https://leetcode.com/problems/remove-element/description/)

### Problem:

Given an array *nums* and a value *val*, remove all instances of that value [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm) and return the new length.

Do not allocate extra space for another array, you must do this by **modifying the input array in-place** with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

**Example 1:**

```
Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length.
```

**Example 2:**

```
Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

Note that the order of those five elements can be arbitrary.

It doesn't matter what values are set beyond the returned length.
```

**Clarification:**

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by **reference**, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

```
// nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums, val);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

### Solutions:

#### Solution A

The order does not matter. So just take the last number to fill the vacancy.

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// created a function that passes in numbers and values
var removeElement = function(nums, val) {
    // created a variable equal to length of the numbers
    let len = nums.length
    // loop through while i is less than len
    for (let i = 0; i < len; i++){
        // conditional of if the index of numbers is equal to value
        if(nums[i] === val){
            // deincrement the numbers index and set that to numbers len 
            nums[i--] = nums[--len]
        }
    }
    return len
};
```

#### Solution B

```javascript

var removeElement = function(nums, val) {
    // create a loop to iterate over the nums array
    for(i = 0; i < nums.length; i++) {
        // declare a conditional statement - if the current index is equal to val
        if(nums[i] === val) {
            // removes that index from the array
            nums.splice(i, 1);
            i--;
        }
    }
    // return the new length of the nums array after any and all instances of val have been removed
    return nums.length;
}; 
```

### Difficulty: 

Easy

### Related Topics:
  
"Array": https://leetcode.com/tag/array

"Two Pointers": https://leetcode.com/tag/two-pointers

### Similar Questions:
  
"Remove Duplicates from Sorted Array": https://leetcode.com/problems/remove-duplicates-from-sorted-array
  
"Remove Linked List Elements": https://leetcode.com/problems/remove-linked-list-elements
  
"Move Zeroes": https://leetcode.com/problems/move-zeroes

