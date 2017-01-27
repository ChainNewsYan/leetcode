/* 
 *ram {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var compare = 0;
    nums.join('').split('0').forEach(x=>{
        if (compare < x.length)
            compare = x.length;
    });
    
    return compare;

};
