/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function reverse(prev, curr) {
    if (!curr) return prev;
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    return reverse(prev, curr);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    return reverse(null, head);
};