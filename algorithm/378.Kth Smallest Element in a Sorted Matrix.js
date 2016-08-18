// Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.
// matrix = [
//    [ 1,  5,  9],
//    [10, 11, 13],
//    [12, 13, 15]
// ],
// k = 8,

// return 13.

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 * 尽快把会的刷完，所以简单的题目给简单的解法。
 * 刷第二轮的时候给出其他解法，而且会把时间、空间复杂度考虑进去
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
