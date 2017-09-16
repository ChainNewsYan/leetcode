
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((x,y)=>{
        return x-y;
    });
    var l = 0;
    while(l<=nums.length){
        if(nums[l]!==l)
            return l;
        ++l;
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    return nums.length*(nums.length+1)/2 - nums.reduce((x,y)=>x+y);

};



/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var a = nums.reduce((x,y)=>x^y);
    var b = function(nums) {
        var l = nums.length;
        var sum = 0;
        do{
            sum^=l;
        }
        while(l--)
            
        return sum;
    }
    return a^b(nums);
};