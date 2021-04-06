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