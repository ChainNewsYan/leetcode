
/**
 * @param {number} n
 * @return {string}
 */
var a = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var convertToTitle = function(n) {
    if(n < 27) {
        return a[n];
    } else {
        var temp = Math.ceil(n / 26)-1;
        return convertToTitle(temp) + convertToTitle(n - temp*26);
    }
};
