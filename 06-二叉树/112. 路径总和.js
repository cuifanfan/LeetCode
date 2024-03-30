class Node {
    constructor(val) {
        this.next = null;
        this.prev = null;
        this.val = val;
    }
}

class MyQueue {
    #size = 0
    constructor(val) {
        this.head = null;
        this.tail = null;
        if (val !== undefined) {
            const node = new Node(val);
            this.head = node;
            this.tail = node;
            this.#size++;
        }
    }

    pop() {
        if (this.empty()) {
            return null;
        }
        const ans = this.head.val;
        this.head = this.head.prev;
        if (this.head) {
            this.head.next = null;
        }
        this.#size--;
        return ans;
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
        }
        if (this.tail) {
            this.tail.prev = node;
        }
        node.next = this.tail;
        this.tail = node;
        this.#size++;
    }

    size() {
        return this.#size;
    }

    peek() {
        if (!this.head) {
            return null;
        }
        return this.head.val;
    }

    empty() {
        return this.#size === 0;
    }
}

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
 * @return {boolean}
 */
var hasPathSum = function (node, targetSum, prevSum = 0) {
    // 1. 确定单层逻辑需要的变量：从根节点到当前节点的和，当前节点, targetSum
    // 2. 递归出口：叶子节点
    // 3. 单层逻辑：
    if (node === null) {
        return false;
    }
    const currentSum = prevSum + node.val;
    if (node.left === null && node.right === null) {
        if (currentSum === targetSum) {
            return true;
        }
    }
    return hasPathSum(node.left, targetSum, currentSum) || hasPathSum(node.right, targetSum, currentSum);
};

var hasPathSum = function (root, targetSum) {
    // 前序遍历
    if (root === null) {
        return false;
    }
    const stack = [{ node: root, prevSum: 0 }];
    while (stack.length !== 0) {
        let { node: orderNode, prevSum } = stack.pop();

        if (orderNode === null) {
            const { node: accessNode, prevSum } = stack.pop();
            const currentSum = prevSum + accessNode.val
            if (currentSum === targetSum && accessNode.left === null && accessNode.right === null) {
                return true;
            }
            continue;
        }
        // 回溯
        if (orderNode.right) {
            prevSum += orderNode.val;
            stack.push({ node: orderNode.right, prevSum: prevSum });
            prevSum -= orderNode.val;
        }
        // 回溯
        if (orderNode.left) {
            prevSum += orderNode.val;
            stack.push({ node: orderNode.left, prevSum: prevSum });
            prevSum -= orderNode.val;
        }

        stack.push({ node: orderNode, prevSum: prevSum });
        stack.push({ node: null, prevSum: prevSum });
    }
    return false;
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

const arr = [1, 2];
const root = createTree(arr);

console.log(hasPathSum(root, 1));