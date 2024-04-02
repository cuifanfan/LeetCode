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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    // 1. 确定递归出口
    if (preorder.length === 0) {
        return null;
    }

    const rootValue = preorder[0];
    const root = new TreeNode(rootValue)
    if (preorder.length === 1) {
        return root;
    }

    const leftPreOrder = [], leftInOrder = [];
    const rightPreOrder = [], rightInOrder = [];

    let delimiterIndex = 0;
    while (inorder[delimiterIndex] !== rootValue) {
        delimiterIndex++;
    }


    // 左子树 [0, delimiterIndex)
    for (let i = 0; i < delimiterIndex; i++) {
        leftInOrder.push(inorder[i]);
        leftPreOrder.push(preorder[i + 1]);
    }
    // 右子树 (delimiterIndex, inorder.length)
    for (let i = delimiterIndex + 1; i < inorder.length; i++) {
        rightInOrder.push(inorder[i]);
        rightPreOrder.push(preorder[i]);
    }
    root.left = buildTree(leftPreOrder, leftInOrder);
    root.right = buildTree(rightPreOrder, rightInOrder);
    return root;
};




/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder, preorderRange, inorderRange) {

    preorderRange = preorderRange || { left: 0, right: preorder.length };
    inorderRange = inorderRange || { left: 0, right: inorder.length };

    // 1. 确定递归出口
    if (preorderRange.left === preorderRange.right) {
        console.log(preorderRange.left, preorderRange.right);
        return null;
    }

    const rootValue = preorder[preorderRange.left];
    const root = new TreeNode(rootValue)
    if (preorderRange.right - preorderRange.left === 1) {
        return root;
    }

    let delimiterIndex = inorderRange.left;
    while (inorder[delimiterIndex] !== rootValue) {
        delimiterIndex++;
    }

    // 左子树
    const leftOrder = {
        // 前序
        pre:{
            left: preorderRange.left + 1,
            right: preorderRange.left + (delimiterIndex - inorderRange.left),
        },
        // 中序
        in: {
            left: inorderRange.left,
            right: delimiterIndex 
        }
    }


    // 右子树
    const rightOrder = {
        // 前序
        pre: {
            left: preorderRange.left + (delimiterIndex - inorderRange.left),
            right: preorderRange.right
        },
        // 中序
        in: {
            left: delimiterIndex + 1,
            right: inorderRange.right
        }
    }
  
    console.log('start------------------------');
    console.log('前序：', preorder.slice(preorderRange.left, preorderRange.right));
    console.log('中序：', inorder.slice(inorderRange.left, inorderRange.right));
    console.log('当前分割值：', rootValue, '分割点在中序中的索引：', delimiterIndex);
    console.log(leftOrder);
    console.log(rightOrder);
    console.log('左子树前序：', preorder.slice(leftOrder.pre.left, leftOrder.pre.right), '右子树前序：', inorder.slice(rightOrder.pre.left, rightOrder.pre.right));
    console.log('左子树中序：', inorder.slice(leftOrder.in.left, leftOrder.in.right), '右子树中序：', inorder.slice(rightOrder.in.left, rightOrder.in.right));
    console.log('end------------------------');
    root.right = buildTree(preorder, inorder, leftOrder.pre, leftOrder.in);
    root.left = buildTree(preorder, inorder, rightOrder.pre, rightOrder.in);
    return root;
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

const preorder = [1,2,3], inorder = [3,2,1]
const root = buildTree(preorder,inorder);
const treeNodesList = preorderTraversal(root);
console.log(treeNodesList);