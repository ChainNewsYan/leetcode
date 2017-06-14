/**
 * @param {number[]} nums
 * @return {number}
 * 从小到大排序取偶数项之和
 */
var arrayPairSum = function(nums) {
    len = nums.length
    nums = nums.sort((x,y)=>x-y)
    sum = 0
    
    do
        sum += nums[len-2]
    while (len-=2)
    
    return sum
};