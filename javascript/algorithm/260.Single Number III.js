
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var arr=[];
    for(let i in nums){
        if(nums.indexOf(nums[i])===nums.lastIndexOf(nums[i]))
            arr.push(nums[i]);
    }
    return arr;
};
