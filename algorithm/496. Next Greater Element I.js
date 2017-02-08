/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    var res = [];
    for (let i in findNums) {
        let head = nums.indexOf(findNums[i]);
        let length = nums.length;
        
        var digit = -1;
        for (var j =head; j<length; j++) {
            if (nums[j] > findNums[i]) {
                digit = nums[j];
                break;
            }
        }
        
        res.push(digit);
        
    }
    
    return res;
};