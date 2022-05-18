/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    var nonDupCount = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > nums[nonDupCount]) {
            nums[++nonDupCount] = nums[i];
        }
    }
   
    return ++nonDupCount;
};
