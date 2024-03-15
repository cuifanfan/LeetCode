/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function swap(prev, curr, head) {
    if (!curr || !curr.next) return head;
    const next = curr.next;
    if (!prev) head = next;
    else prev.next = next;
    curr.next = next.next;
    next.next = curr;
    prev = curr;
    curr = curr.next;
    return swap(prev, curr, head);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    return swap(null, head, head);
};