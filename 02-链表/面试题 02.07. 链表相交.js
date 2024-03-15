/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // 快慢指针
    let currA = headA, lengthA = 0;
    while (currA) {
        lengthA++;
        currA = currA.next;
    }
    let currB = headB, lengthB = 0;
    while (currB) {
        lengthB++;
        currB = currB.next;
    }
    let gap = lengthA - lengthB;
    currA = headA, currB = headB;
    // 让链表先走gap步骤
    while (gap > 0) {
        currA = currA.next;
        gap--;
    }
    while (gap < 0) {
        currB = currB.next;
        gap++;
    }
    while(currA !== currB) {
        currA = currA.next;
        currB = currB.next;
    }
    return currA;
};