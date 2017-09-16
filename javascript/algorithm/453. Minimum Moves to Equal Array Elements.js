/**
 * @param {number[]} nums
 * @return {number}
 * 数学题
 * 参考解释 https://discuss.leetcode.com/topic/66737/it-is-a-math-question
 */
var minMoves = function(nums) {
    var sum = nums.reduce((x,y)=>x+y);
    var min = nums.reduce((x,y)=>{return x<y?x:y});
    return sum-nums.length*min;

};


