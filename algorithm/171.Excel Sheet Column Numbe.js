
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var sum=0;
    var l = s.split('').length-1;
    s.split('').forEach(x=>{
        sum+=((x.charCodeAt()-64)*Math.pow(26,l));
        --l;
    })
    return sum;
};
