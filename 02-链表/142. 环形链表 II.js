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
var detectCycle = function (head) {
    let ans = null;
    let fast = head, slow = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            // 环内相遇
            ans = head;
            while (ans !== slow) {
                slow = slow.next;
                ans = ans.next;
            }
            break;
        } 
    }
    return ans;
};