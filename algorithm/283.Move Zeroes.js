// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 这种解法只能由后往前遍历
 * 当从前往后遍历时：for(var i=0;i<nums.lenght;i++),nums=[0,0,1]时.第一次循环得到[0,1,0],然而原本索引为1,2的元素此时索引已经变为0,1.
 * 而循环体内i仍自加.
 */
var moveZeroes = function(nums) {
    for(var i=nums.length-1;i>=0;i--){
        if(nums[i]===0){
            nums.splice(i,1);
            nums.push(0)
        }
    }
};