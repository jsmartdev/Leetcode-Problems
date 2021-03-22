/* eslint-disable */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
     // created
    let len = 0;
    // creates a loop to iterate through the length of numbers
    for (let i = 0; i < nums.length; i++) {
        // if the index of numbers is (index -1) add one to len 
        if(nums[i] !== nums[i-1]){
            nums[len++] = nums[i]
}
    }
 return len;
};