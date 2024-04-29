/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let curr = root;
    while (curr) {
        if (curr.val < Math.min(p.val, q.val)) {
            curr = curr.right;
        } else if (curr.val > Math.max(p.val, q.val)) {
            curr = curr.left;
        } else {
            // 分岔口或者相等
            break;
        }
    }
    return curr;
};