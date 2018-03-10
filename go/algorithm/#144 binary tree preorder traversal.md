# Question
Given a binary tree, return the preorder traversal of its nodes' values.

**For example:**
Given binary tree ```{1,#,2,3}```,
```
   1
    \
     2
    /
   3
```
return ```[1,2,3]```.

**Note:** Recursive solution is trivial, could you do it iteratively?

# solution
```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func preorderTraversal(root *TreeNode) []int {
    res := []int{}
    if root != nil {
        process(root, &res)
    }
    
    return res
}

func process(root *TreeNode, tmp *[]int) {
    if root != nil {
        *tmp = append(*tmp, root.Val)
    }
    
    if root.Left != nil {
        process(root.Left, tmp)
    }
    
    if root.Right != nil {
        process(root.Right, tmp)
    }
}
```
# explain
时间复杂度 ```O(n)```。 

二叉树先序遍历。二叉树遍历方式一般有三种：递归、迭代、morris。