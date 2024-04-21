/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function traversal(root, callback) {
    if (root === null) {
        return;
    }
    traversal(root.left, callback);
    callback && callback(root.val);
    traversal(root.right, callback);
}

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
        if (orderNode.right) stack.push(orderNode.right);
        stack.push(orderNode, null);
        if (orderNode.left) stack.push(orderNode.left);
    }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    // 判断当前值与上一个是否相同
    let prev = null; 
    // 相同值出现的次数
    let count = 0; 
    let maxCount = 0;
    let ans = [];
    traversal(root, (val) => {
        // 遇到了不同值, 更新次数
        if (prev !== val) {
            count = 1;
            prev = val;
        } else {
            // 值相同, 次数增加
            count++;
        }
        
        // 当前值的次数
        if (count > maxCount) {
            ans = [val];
        } else if (count === maxCount) {
            ans.push(val);
        }

        maxCount = Math.max(count, maxCount);
    })
    return ans;
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

const root = [1,0,1,0,0,1,1,0];
const treeRoot = createTree(root);
console.log(findMode(treeRoot));