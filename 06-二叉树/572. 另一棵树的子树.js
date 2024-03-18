/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if (subRoot === null) return true;
    if (root === null) return false;
    const stack = [root];
    while (stack.length !== 0) {
        const popNode = stack.pop();
        if (popNode.val === subRoot.val && isSameTree(popNode, subRoot)) {
            return true;
        }
        if (popNode.right) {
            stack.push(popNode.right);
        }
        if (popNode.left) {
            stack.push(popNode.left)
        }
    }
    return false;
}


var isSameTree = function (p, q) {
    if (p === q) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}