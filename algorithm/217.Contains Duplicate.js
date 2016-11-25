
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var res = false;
    nums = nums.sort((x,y)=>{
        if(x-y===0)
            res = true;
        return x-y;
    })
    return res;
};

