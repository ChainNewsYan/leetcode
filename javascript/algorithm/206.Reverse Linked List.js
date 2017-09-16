
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
 */
var reverseList = function(head) {
    if(head===null||head.next===null)
        return head;
    var arr =[];
    while(head!==null){
        arr.push(head.val);
        head=head.next;
    }
    return arr.reverse();
};




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
 */
var reverseList = function(head) {
    if(head===null||head.next===null)
        return head;
    var p1 = head.next;
    var p2;
    head.next = null;
    while(p1){
        p2 = p1.next;
        p1.next=head;
        head = p1; 
        p1   = p2;
    }
    
    return head;
};




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
 */
var reverseList = function(n) {
    var prev = null
    while (n) 
         [n.next, n, prev] = [prev, n.next, n]
    
    return prev ;
};

