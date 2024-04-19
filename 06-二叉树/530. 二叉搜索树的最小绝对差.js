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
var getMinimumDifference = function (root) {
    if (root === null || (root.left === null && root.right === null)) {
        return Infinity;
    }
    let currLeftMin = Infinity, currRightMin = Infinity;
    if (root.left) {
        let currLeft = root.left;
        while (currLeft.right) {
            currLeft = currLeft.right;
        }
        currLeftMin = Math.abs(currLeft.val - root.val);
    }
    if (root.right) {
        let currRight = root.right;
        while (currRight.left) {
            currRight = currRight.left;
        }
        currRightMin = Math.abs(currRight.val - root.val);
    }
    return Math.min(currLeftMin, currRightMin, getMinimumDifference(root.left), getMinimumDifference(root.right));
};

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
        const rightVal = arr.length ? arr.shift() : null;

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

const root = [1, null, 3, 2];
const treeRoot = createTree(root);
console.log(getMinimumDifference(treeRoot));


