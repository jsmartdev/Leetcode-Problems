/* eslint-disable */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

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

