
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    nums.push(target);
    nums.sort((x,y)=>x-y);
    return nums.indexOf(target);
};

