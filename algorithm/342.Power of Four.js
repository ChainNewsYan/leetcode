// Given an integer (signed 32 bits), write a function to check whether it is a power of 4. 
/**
 * @param {number} num
 * @return {boolean}
 * 这题不允许用递归和迭代，完全就是数学题...- -
 * 如果可以用的话，直接上移位运算符
 */
var isPowerOfFour = function(num) {
    if(num<=0)
        return false;
    var res = (Math.log10(num)/Math.log10(4))%1;
    return res === 0?true:false;
        
};