# Question
Invert a binary tree.
```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```
to
```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

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
func invertTree(root *TreeNode) *TreeNode {
    if root == nil {
        return root
    }
    
    tmp := invertTree(root.Left)
    root.Left = invertTree(root.Right)
    root.Right = tmp
    
    return root
}
```
# explain
递归，二叉树的题目里最常用到的算法。