/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 简单的二叉树先序遍历
 */
var preorderTraversal = function(root,preorder = []) {
    if (root) {
        preorder.push(root.val);
        if (root.left) 
            preorderTraversal(root.left,preorder);
        if (root.right)
            preorderTraversal(root.right,preorder);
    }
    
    return preorder;
};