/* eslint-disable */
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