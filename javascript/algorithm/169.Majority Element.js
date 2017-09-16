
/**
 * @param {number[]} nums
 * @return {number}
 * 
 */
var majorityElement = function(nums) {
    if(nums.length===1)
        return nums[0];
    var n = Math.floor(nums.length/2);
    var map = {};
    nums.forEach(x=>{
        map[x] = x in map?++map[x]:1;
    });
    for(let i in map){
        if(map[i]>n)
            return i*1;
    }

};
