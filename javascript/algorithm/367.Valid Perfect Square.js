
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    return Math.floor(Math.sqrt(num)) == Math.ceil(Math.sqrt(num));
};




/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num==0||num==1)
        return true;
    var low = 0;
    var high = num;
    while(low<=high){
        var mid = Math.ceil((high+low)/2);
        if(mid*mid==num)
            return true;
        if(mid*mid>num)
            high = mid-1;
        if(mid*mid<num)
            low = mid+1;
    }
    return false;
};



// 二分查找法（或者叫折半查找法），一般是O(log2n)复杂度。
// 这个比较简单，二分法应该都会。
// 在discuss看到一个Newthon's Method(牛顿迭代法)，太高大上了，等刷第二轮的时候再给出这个解法。

