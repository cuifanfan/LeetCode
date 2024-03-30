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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let ans = 0;
    const stack = [];
    if (root !== null) {
        stack.push(root);
    }
    while (stack.length !== 0) {
        const orderNode = stack.pop();
        if (orderNode === null) {
            const accessNode = stack.pop();
            if (accessNode.left && accessNode.left.left === null && accessNode.left.right === null) {
                ans += accessNode.left.val;
            }
            continue;
        }
        if (orderNode.right) {
            stack.push(orderNode.right);
        } 
        if (orderNode.left) {
            stack.push(orderNode.left);
        }
        stack.push(orderNode, null);
    }
    return ans;
};

// 递归写法
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (root === null) {
        return 0;
    }

    if (root.left && root.left.left === null && root.left.right === null) {
        return root.left.val +  sumOfLeftLeaves(root.right);
    }

    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
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

const arr = [1, 2, 2, 3, 3, null, null, 4, 4];
const root = createTree(arr);

console.log(sumOfLeftLeaves(root));