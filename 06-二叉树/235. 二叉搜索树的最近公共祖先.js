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
    if (root === null || root === p || root === q) {
        return root;
    }
    
    const left = lowestCommonAncestor(root.left);
    const right = lowestCommonAncestor(root.right);

    if (left !== null && right !== null) {
        return root;
    }

    // 至少有一个为null
    return left === null ? right : left;
};