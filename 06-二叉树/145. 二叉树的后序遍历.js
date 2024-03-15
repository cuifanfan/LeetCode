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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const ans = [];
    // 记录元素访问顺序
    const stack = []; 
    if (root) stack.push(root);

    while (stack.length !== 0) {
        const popNode = stack.pop();

        // 当前节点已被访问
        if (popNode === null) {
            ans.push(stack.pop().val);
            continue;
        }
        
        // 访问当前节点，添加标识
        stack.push(popNode);
        stack.push(null);
        if (popNode.right) stack.push(popNode.right);
        if (popNode.left) stack.push(popNode.left);
    }
    return ans;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const ans = [];
    if (!root) return ans;
    const stack = [root];
    while (stack.length !== 0) {
        const treeNode = stack.pop();
        ans.push(treeNode.val);
        if (treeNode.left) stack.push(treeNode.left)
        if (treeNode.right) stack.push(treeNode.right)
    }

    return ans.reverse();
};

// 递归写法
function preorderTraversalTree(root, hanlder) {
    if (!root) {
        return;
    }
    if (root.left) {
        preorderTraversalTree(root.left, hanlder);
    }
    if (root.right) {
        preorderTraversalTree(root.right, hanlder);
    }
    hanlder && hanlder(root.val);
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const ans = [];
    preorderTraversalTree(root, ans.push.bind(ans));
    return ans;
};