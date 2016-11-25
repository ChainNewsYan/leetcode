
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
 */
var topKFrequent = function(nums, k) {

    var mapping = {};
    nums.forEach(function(e){
      mapping[e]=e in mapping ?++mapping[e]:1;
    });
    var result  =[];
    

    Object.keys(mapping).sort(function(x,y){return mapping[y]-mapping[x]}).
    slice(0,k).forEach(x=>{
        result.push(x*1);
    });
    return result;
}


 // 这题的难点在时间复杂度的限定上,题目要求时间复杂度优于O(nlogn),
 // 所以第一个想法就是哈希表建立‘值-频数’映射+堆排序(如果没有限定时间复杂度,随便选一个排序算法其实都可以)
 // 之前我以为肯定没法避免自己手写排序(因为索引),后来确实看到别人写出来了...


