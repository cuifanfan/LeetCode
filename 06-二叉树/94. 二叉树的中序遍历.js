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
var inorderTraversal = function(root) {
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
        if (popNode.right) stack.push(popNode.right);
        stack.push(popNode);
        stack.push(null);
        if (popNode.left) stack.push(popNode.left);
    }
    return ans;
};

function pushAllLeftNode(root, stack) {
    let curr = root;
    while (curr) {
        stack.push(curr);
        curr = curr.left;
    }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const ans = [];
    if (!root) return ans;
    const stack = [];
    // 左节点全部入栈(包含当前节点)
    pushAllLeftNode(root, stack);
    while (stack.length !== 0) {
        const treeNode = stack.pop();
        ans.push(treeNode.val);
        pushAllLeftNode(treeNode.right, stack);
    }
    return ans;
};

// 递归写法
function preorderTraversalTree(root, hanlder) {
    if (!root) {
        return;
    }
    if (root.left) {
        preorderTraversalTree(root.left, hanlder);
    }
    hanlder && hanlder(root.val);
    if (root.right) {
        preorderTraversalTree(root.right, hanlder);
    }
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const ans = [];
    preorderTraversalTree(root, ans.push.bind(ans));
    return ans;
};