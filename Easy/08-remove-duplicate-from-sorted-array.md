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
        if(nums[i] !== nums[i-1]) {
            nums[len++] = nums[i]
}
    }
    return len;
};

var removeDuplicates = function(nums) {
    for (i = 0; i < nums.length; i++) {
        // declare conditional statement - if current index is identical to next index
        if (nums[i] == nums[i+1]) {
            // remove current index from nums array
            nums.splice(i, 1);
            i--;
        }
    }
};