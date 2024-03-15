/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let prev = null, curr = head;
    while (curr) {
        if (curr.val === val) {
            if (!prev) {
                head = curr.next
            } else {
                prev.next = curr.next
            };
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return head;
};