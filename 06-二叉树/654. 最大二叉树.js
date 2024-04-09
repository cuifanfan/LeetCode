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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums, left = 0, right = nums.length - 1) {
    // 1. 确认递归出口
    if (left > right) {
        return null;
    }

    // 2. 确定单层逻辑:在left和right上寻找最大值
    let maxValue = nums[left], maxIndex = left;
    for (let i = left + 1; i <= right; i++) {
        if (maxValue < nums[i]) {
            maxValue = nums[i];
            maxIndex = i;
        }
    }
    const maxNode = new TreeNode(maxValue);
    maxNode.left = constructMaximumBinaryTree(nums, left, maxIndex - 1);
    maxNode.right = constructMaximumBinaryTree(nums, maxIndex + 1, right);
    return maxNode;
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

const nums = [3, 2, 1, 6, 0, 5];
const treeRoot = constructMaximumBinaryTree(nums);
const treeLevelOrderValues = preorderTraversal(treeRoot);
console.log(treeLevelOrderValues);