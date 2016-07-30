// Given a non-empty array of integers, return the k most frequent elements.

// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 这题的难点都在时间复杂度的限定上,题目要求时间复杂度优于O(nlogn),
 * 所以第一个想法就是哈希表建立‘值-频数’映射+堆排序(如果没有限定时间复杂度,随便选一个排序算法其实都可以)
 * 之前我以为肯定没法避免自己手写排序(因为索引),后来确实看到别人写出来了...
 * 这题大家的思路其实都是一样的,差在写法上面
 * 下面给出对方写法
 */
var topKFrequent = function(nums, k) {
    //前面半部分是我写的
    var mapping = {};
    nums.forEach(function(e){
      mapping[e]=e in mapping ?++mapping[e]:1;
    });
    var result  =[];
    
    //从这里开始和他不一样,非常长的连缀写法(连缀的每一个节点上都有我不懂的知识)
    Object.keys(mapping).sort(function(x,y){return mapping[y]-mapping[x]}).
    slice(0,k).forEach(x=>{
        result.push(x*1);
    });
    return result;
}
