/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arr = [];
    for(let i =0;i<nums.length;i++){
        for(let j =i;j<nums.length;j++){
            if(nums[i]+nums[j]===target&&i!=j){
                arr.push(i);
                arr.push(j);
                return arr;
            }
        }
    }
    
};


