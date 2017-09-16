
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var res = [0];
    for(let i =1;i<=num;i++)
        res.push(countBinaryOne(i))
    return res;
};

var countBinaryOne = function(n){
    var res = [];
    while(n){
        if(n%2==1)
            res.push(1);
        n = Math.floor(n/2);
    }
    return res.length;
}



// 这题不难，但是题目后面加了时间复杂度O(n)和不能使用相关函数来解，难度就升了一个档次。
// 这个解法是不考虑follow up 1的情况下得出的。
// 由于follow up 3限制所以要自己写二进制转换。
// 下面是完整包括二进制转换的写法，上面的countBinaryOne是为了节省运行算法的时间而偷懒了   


    var countBinaryOne = function(n){
        var res = [];
        var num;
        while(n){
            res.push(n%2);
            n = Math.floor(n/2);
        }
        res = res.reverse();//至此二进制转换完成
        res.forEach(x=>{
            x!==1||++num;
        });
        return num;//返回二进制数组中1的个数
    }
