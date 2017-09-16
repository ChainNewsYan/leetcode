# Question
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
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
func isSameTree(p *TreeNode, q *TreeNode) bool {
    if p == nil && q == nil {
        return true
    } else if p == nil || q == nil { // 有了第一个 if 判断的情况下，如果这个判断为 true 则说明 p 和 q 其中一个 nil, 另一个不为 nil
        return false
    } else {
        return p.Val == q.Val && isSameTree(p.Left, q.Left) && isSameTree(p.Right, q.Right)
    }
}
```
# explain
时间复杂度 ```O(n)```。  

判断二叉树是否相同 （左右子树结构和值都要相同），相当于前序遍历。
