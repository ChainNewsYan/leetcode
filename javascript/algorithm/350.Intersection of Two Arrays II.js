
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var res =[];
    for(let i =nums2.length;i>=0;i--){
        var index = nums1.indexOf(nums2[i]);
        if(-1!==index){
            res.push(nums2[i]);
            nums1.splice(index,1);
            nums2.splice(i,1);
        }
    }
    
    return res;
};
