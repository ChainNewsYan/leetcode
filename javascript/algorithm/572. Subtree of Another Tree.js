/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 二叉树，没啥好说的..做法普遍一样
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if (s==null)
        return false;
    if (isSame(s,t))
        return true;
    return isSubtree(s.left,t) ||isSubtree(s.right,t);
};


var isSame = function(s, t) {
    if (s==null && t==null)
        return true;
    if (s==null || t==null)
        return false;
    if (s.val != t.val)
        return false;
    return isSame(s.left,t.left) && isSame(s.right,t.right);
}