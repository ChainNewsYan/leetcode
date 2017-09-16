# Question
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
```
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
```
# solution
```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
    if head == nil {
        return nil
    }
    
    current := head
    for current != nil {
        if current.Next != nil && current.Next.Val == current.Val {
            current.Next = current.Next.Next
        } else {
            current = current.Next   
        }
    }
    
    return head
}
```
# explain
时间复杂度 ```O(n)```。  

有序单链表去重, 注意出现 2 个以上的连续重复节点的情况。只有当下一个节点的值不等于 current 节点的值时， current 指针才会移动到 next。
