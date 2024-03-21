/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class Node {
    constructor(val) {
        this.next = null;
        this.prev = null;
        this.val = val;
    }
}

class MyQueue {
    #size = 0;
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

    peek() {
        if (!this.head) {
            return null;
        }
        return this.head.val;
    }

    size() {
        return this.#size;
    }

    empty() {
        return this.#size === 0;
    }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const queue = new MyQueue();
    const ans = [];
    if (root) queue.push(root);
    while (!queue.empty()) {
        const result = [];
        const size = queue.size();
        for (let i = 0; i < size; i++) {
            const popNode = queue.pop();
            result.push(popNode.val);
            if (popNode.left) queue.push(popNode.left);
            if (popNode.right) queue.push(popNode.right);
        }
        ans.push(result);
    }

    return ans;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const ans = [];
    if (!root) return ans;
    const stack = [root];
    while (stack.length !== 0) {
        const treeNode = stack.pop();
        ans.push(treeNode.val);
        if (treeNode.right) {
            stack.push(treeNode.right);
        }
        if (treeNode.left) {
            stack.push(treeNode.left);
        }
    }
    return ans;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 递归解法
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    function balanced(root) {
        if (root === null) {
            return {balanced: true, depth: 0}
        }

        const leftTree = balanced(root.left);
        const rightTree = balanced(root.right);
        return {
            depth: Math.max(leftTree.depth, rightTree.depth) + 1,
            balanced: leftTree.balanced && rightTree.balanced && Math.abs(leftTree.depth - rightTree.depth) <= 1,
        }
    }
    return balanced(root).balanced;
};


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    function balanced(root) {
        if (root === null) {
            return 0;
        }

        const leftTreeDepth = balanced(root.left);
        console.log(root.val, 'leftTreeDepth: ', leftTreeDepth);
        if (leftTreeDepth === -1) return -1;
        const rightTreeDepth = balanced(root.right);
        console.log(root.val, 'rightTreeDepth: ', rightTreeDepth);
        if (rightTreeDepth === -1) return -1;
        return Math.abs(leftTreeDepth - rightTreeDepth) > 1 ? -1 : Math.max(leftTreeDepth, rightTreeDepth) + 1;
    }
    const depth = balanced(root);
    return depth !== -1;
};


// 迭代解法
function getDepth(root) {
    if (root === null) {
        return 0;
    }
    return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
}


function getDepth(root) {
    if (root === null) {
        return 0;
    }
    const stack = [root];
    let depth = 0, result = 0;
    while (stack.length !== 0) {
        const orderNode = stack.pop();
        if (orderNode === null) {
            // 所有子节点均访问过
            depth--;
            stack.pop();
            continue;
        }
        stack.push(orderNode);
        stack.push(null);
        // 访问子节点
        if (orderNode.right) {
            stack.push(orderNode.right);
        }

        if (orderNode.left) {
            stack.push(orderNode.left);
        }
        result = Math.max(result, ++depth);
    }
    return result;
}

var isBalanced = function(root) {
    if (!root) return true;
    const stack = [root];
    while (stack.length !== 0) {
        const popNode = stack.pop();
        console.log('leftDepth:', getDepth(popNode.left), 'rightDepth:', getDepth(popNode.right));
        if (Math.abs(getDepth(popNode.left) - getDepth(popNode.right)) > 1) {
            return false;
        }

        if (popNode.left) {
            stack.push(popNode.left);
        }

        if (popNode.right) {
            stack.push(popNode.right);
        }
    }
    return true
}

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

const arr = [1,2,2,3,3,null,null,4,4];
const root = createTree(arr);
const results = getDepth(root);
console.log(results);
// console.log('depth:', getDepth(root));
// console.log(isBalanced(root));

