
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var res;
    nums.sort((x,y)=>{
        if(x===y)
            res = x;
        return x-y;
    })
    return res;
};
