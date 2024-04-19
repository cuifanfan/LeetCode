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

// 二叉搜索树进行中序遍历，就是升序

// 中序遍历
function traversal(root, callback) {
    if (root === null) {
        return;
    }
    const stack = [root];
    while (stack.length !== 0) {
        const orderNode = stack.pop();
        if (orderNode === null) {
            const accessNode = stack.pop();
            callback && callback(accessNode);
            continue;
        }
        orderNode.right && stack.push(orderNode.right);
        stack.push(orderNode, null);
        orderNode.left && stack.push(orderNode.left);
    }
}

var getMinimumDifference = function (root) {
    let ans = Infinity;
    let prev = null;
    traversal(root, (node) => {
        if (prev !== null) {
            ans = Math.min(ans, Math.abs(node.val - prev.val));
        }
        prev = node;
    });
    return ans;
}


var getMinimumDifference = function (root) {
    let ans = Infinity, prev = null;
    const stack = [root];
    while (stack.length !== 0) {
        const orderNode = stack.pop();
        if (orderNode === null) {
            const accessNode = stack.pop();
            if (prev !== null) {
                ans = Math.min(ans, Math.abs(accessNode.val - prev.val));
            }
            prev = accessNode;
            continue;
        }
        orderNode.right && stack.push(orderNode.right);
        stack.push(orderNode, null);
        orderNode.left && stack.push(orderNode.left);
    }
    return ans;
}

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


