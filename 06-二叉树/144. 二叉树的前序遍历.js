

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
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
        
        if (popNode.right) stack.push(popNode.right);
        if (popNode.left) stack.push(popNode.left);
        // 访问当前节点，添加标识
        stack.push(popNode);
        stack.push(null);
    }
    return ans;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const ans = [];
    if (!root) return ans;
    const stack = [root];
    while (stack.length !== 0) {
        const treeNode = stack.pop();
        ans.push(treeNode.val);
        if (treeNode.right) {
            stack.push(treeNode.right);
        }
        if (treeNode.left) {
            stack.push(treeNode.left);
        }
    }
    return ans;
};

// 递归写法

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function preorderTraversalTree(root, hanlder) {
    if (!root) {
        return;
    }
    hanlder && hanlder(root.val);
    if (root.left) {
        preorderTraversalTree(root.left, hanlder);
    }
    if (root.right) {
        preorderTraversalTree(root.right, hanlder);
    }
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const ans = [];
    preorderTraversalTree(root, ans.push.bind(ans));
    return ans;
};