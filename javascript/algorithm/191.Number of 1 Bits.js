/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var num = 0;
    while(n){
        n%2!==1||++num;
        n = Math.floor(n/2);
    }
    return num;
};
