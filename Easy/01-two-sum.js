/* eslint-disable */

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