/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 添加虚拟头结点，使链表最短为2个元素，slow.next.next能够访问
    const preHead = new ListNode(0);
    preHead.next = head;
     // 双指针，fast先比slow多走 n - 1步
    let fast = head, gap = 1, slow = preHead;
    while (fast.next) {
        if (gap <= n - 1) gap++; 
        else slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    // 判断删除第一个节点
    return slow === preHead ? preHead.next : head;
};