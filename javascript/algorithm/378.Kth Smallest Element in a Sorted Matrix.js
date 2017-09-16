
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    var arr=[];
    matrix.forEach(x=>{
        x.forEach(i=>{
            arr.push(i);
        });
    });
    arr.sort((x,y)=>{
        return x-y;
    })
    return arr[k-1];
};




