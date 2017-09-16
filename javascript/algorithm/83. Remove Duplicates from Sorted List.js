/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 单链表去重，O(n^2)
 */
var deleteDuplicates = function(head) {
    if (head === null) return null;
    var current = head;
    while (current!==null) {
        while (current.next!==null && current.val == current.next.val) {
            current.next = current.next.next;
        }
        current= current.next;
    }
    
    return head;
};
