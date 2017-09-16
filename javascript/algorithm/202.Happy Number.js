/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var sum = n;
    var arr = [];
    while(sum!==1){
        if(sum<10)
            sum = Math.pow(sum,2);
        else
            sum = (sum+'').split('').map(x=>Math.pow(x*1,2)).reduce((x,y)=>x+y); 
        if(arr.indexOf(sum)!==-1)
            return false;
        arr.push(sum);
    }
    return true;
};

