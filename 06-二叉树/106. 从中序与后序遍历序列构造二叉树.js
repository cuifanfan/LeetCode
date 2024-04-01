/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    // 1. 确定单层递归需要的参数：中序遍历顺序、后序遍历顺序
    // 2. 确定递归出口：两个遍历顺序为空，说明为叶子结点
    // 3. 单层递归逻辑

    if (postorder.length === 0) {
        return null;
    }

    // 当前节点
    const nodeValue = postorder[postorder.length - 1];
    const node = new TreeNode(nodeValue);
    
    // 叶子节点
    if (postorder.length === 1) {
        return node;
    }

    const leftInoder = [], leftPostorder = [];
    const rightInorder = [], rightPostorder = [];

    // 切割点
    let delimiterIndex = 0;
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === nodeValue) {
            delimiterIndex = i;
            break;
        }
    }

    // 切割中序数组
    for (let i = 0; i < delimiterIndex; i++) {
        leftInoder.push(inorder[i]);
    }

    for (let i = delimiterIndex + 1; i < inorder.length; i++) {
        rightInorder.push(inorder[i]);
    }

    // 切割后序数组
    for (let i = 0; i < leftInoder.length; i++) {
        leftPostorder.push(postorder[i]);
    }

    for (let i = leftPostorder.length; i < postorder.length - 1; i++) {
        rightPostorder.push(postorder[i]);
    }

    node.left = buildTree(leftInoder, leftPostorder);
    node.right = buildTree(rightInorder, rightPostorder);
    return node;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
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

const inorder =[9,3,15,20,7], postorder = [9,15,7,20,3];
const root = buildTree(inorder, postorder);
const treeNodesList = preorderTraversal(root);
console.log(treeNodesList);