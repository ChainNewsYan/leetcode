
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var f= x<0?-1:1;
    var res = (Math.abs(x)+'').split('').reverse().join('')*1;
    if(res>=(Math.pow(2,31)-1))
        return 0;
    return f===1 ? res:0-res;
};


1. 这题偷懒了，同样第二轮给出比较正常点的答案。
2. 注意不要溢出就行了，虽然js只有number类型，但是当结果超出2^31-1还是会被判定溢出。
