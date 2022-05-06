/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var computedMap = new Map();
    function easyHash (e, i) {
        return e.toString();
    }
    for (i = 0; i < nums.length; i++) {
        var mappedIndex = computedMap.get(easyHash(target - nums[i]));
        if (mappedIndex !== undefined && mappedIndex !== i) {
            return [i, computedMap.get( easyHash(target - nums[i]) )];
        }
        // store current result first.
        computedMap.set(nums[i].toString(), i);
    }
};