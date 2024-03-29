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


/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const result = [];
    function treePath(node, path = '', result = []) {
        path += node.val;
        if (node.left === null && node.right === null) {
            result.push(path);
            return;
        }

        if (node.left) {
            path += '->';
            treePath(node.left, path, result);
            // 回溯掉 '->'
            path = path.slice(0, path.length - 2);
        }
        if (node.right) {
            path += '->';
            treePath(node.right, path, result);
            // 回溯掉 '->'
            path = path.slice(0, path.length - 2);
        }
    }
    treePath(root, '', result);
    return result;
};


/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (root === null) {
        return [];
    }
    const result = [];
    const stack = [root];
    const pathMap = new Map();
    while (stack.length !== 0) {
        const orderNode = stack.pop();
        if (orderNode === null) {
            // 访问节点
            const accessNode = stack.pop();
            const prePath = pathMap.has(accessNode) ? (pathMap.get(accessNode) + '->') : '';
            const path = prePath + accessNode.val;
            accessNode.left && pathMap.set(accessNode.left, path);
            accessNode.right && pathMap.set(accessNode.right, path);
            !accessNode.left && !accessNode.right && result.push(path);
            continue;
        }
        // 确定访问顺序
        orderNode.right && stack.push(orderNode.right);
        orderNode.left && stack.push(orderNode.left);
        stack.push(orderNode, null);
    }
    return result;
};


/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (root === null) {
        return [];
    }
    const result = [];
    const stack = [root];
    const pathStack = [];
    while (stack.length !== 0) {
        const orderNode = stack.pop();
        if (orderNode === null) {
            // 访问节点
            const accessNode = stack.pop();
            const prePath = pathStack.length ? pathStack[pathStack.length - 1] + '->' : '';
            const path = prePath + accessNode.val;
            if (accessNode.left === null && accessNode.right === null) {
                result.push(path);
            } 
            continue;
        }
        // 确定访问顺序
        orderNode.right && stack.push(orderNode.right);
        orderNode.left && stack.push(orderNode.left);
        stack.push(orderNode, null);
    }
    console.log(pathStack);
    return result;
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