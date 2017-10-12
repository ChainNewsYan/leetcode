# Question
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
func maxDepth(root *TreeNode) int {
    if root == nil {
        return 0
    }
    
    left := maxDepth(root.Left)
    right := maxDepth(root.Right)

    if left >= right {
        return left + 1
    }
    
    return right + 1
}
```
# explain
时间复杂度 ```O(n)```，同二叉树的前序遍历。 

求二叉树深度，递归。另，go 语言目前没有三元运算符。 
