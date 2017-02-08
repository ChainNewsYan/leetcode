/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var sortedNums = nums.concat().sort((x,y)=>y-x);  // nums.concat 一维数组的复制
    for (let i in sortedNums) {
        var index = nums.indexOf(sortedNums[i]);
        switch(i*1) {
            case 0:nums[index] = "Gold Medal";break;
            case 1:nums[index] = "Silver Medal";break;
            case 2:nums[index] = "Bronze Medal";break;
            default:nums[index] = i*1+1+'';break;
        }
    }

    return nums;
};
