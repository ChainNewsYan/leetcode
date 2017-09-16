/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root,isleft = false) {
    if(!root)
        sum = 0;
    else if(root.left==null && root.right==null){
        if(isleft == true)
            sum = root.val;
        else
            sum = 0;
    }
        
    else {
        sum = sumOfLeftLeaves(root.left,true)+sumOfLeftLeaves(root.right,false);
    }
    
    return sum;
};