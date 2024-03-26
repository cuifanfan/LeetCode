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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const ans = [];
    function treePath(node, prePath='') {
        const path = prePath + node.val;

        if (node.left === null && node.right === null) {
            ans.push(path);
            return;
        }
        
        node.left && treePath(node.left, path + '->');
        node.right && treePath(node.right, path + '->');
    }
    treePath(root);
    return ans;
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

const results = binaryTreePaths(root);
console.log(results);