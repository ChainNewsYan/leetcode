/**
 * @param {number} num
 * @return {string}
 * 先用原生的 api.后面再给进制转换，因为 js 的除法给的不是整数结果。
 */
var convertToBase7 = function(num) {
    return num.toString(7);
};


