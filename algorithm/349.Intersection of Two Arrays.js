//Given two arrays, write a function to compute their intersection.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var arr=new Array();
    for(var i in nums1){
        if(arr.indexOf(nums1[i])===-1&&nums2.indexOf(nums1[i])!==-1){
            arr.push(nums1[i]);
        }
    }
    return arr;
};