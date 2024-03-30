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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    if (root === null) {
        return [];
    }
    // 1. 确定单次递归用到的变量：节点，目标和，当前节点之前的路径
    // 2. 确定递归出口
    const results = [];
    function getPathSum(node, prePath = [], prevSum = 0) {
        if (node.left === null && node.right === null) {
            if (prevSum + node.val === targetSum) {
                results.push([...prePath, node.val]);
            }
            return;
        }

        // 回溯
        if (node.left) {
            prevSum += node.val;
            prePath.push(node.val);
            getPathSum(node.left, prePath, prevSum);
            prePath.pop();
            prevSum -= node.val;
        }

        // 回溯
        if (node.right) {
            prevSum += node.val;
            prePath.push(node.val);
            getPathSum(node.right, prePath, prevSum);
            prePath.pop();
            prevSum -= node.val;
        }
    }
    getPathSum(root);
    return results;
};

// 创建二叉树
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function createTree(arr) {
    if (arr.length === 0) return null;
    const root = new TreeNode(arr.shift());
    const queue = [root];
    while (arr.length !== 0) {
        const popNode = queue.pop();
        const leftVal = arr.shift();
        const rightVal = arr.shift();

        if (leftVal !== null) {
            popNode.left = new TreeNode(leftVal);
            queue.unshift(popNode.left);
        }

        if (rightVal !== null) {
            popNode.right = new TreeNode(rightVal);
            queue.unshift(popNode.right);
        }
    }
    return root;
}

const arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
const root = createTree(arr);

console.log(pathSum(root, 22));