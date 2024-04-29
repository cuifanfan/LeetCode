/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
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

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    // 中序遍历
    if (root === null) {
        return new TreeNode(val);
    }
    const stack = [root];
    while (stack.length !== 0) {
        const orderNode = stack.pop();
        if (orderNode === null) {
            const accessNode = stack.pop();
            // 没到结尾
            if (accessNode.val > val) {
                const newNode = new TreeNode(val);
                [newNode.right, accessNode.right] = [accessNode.right, newNode];
                [newNode.val, accessNode.val] = [accessNode.val, newNode.val];
                break;
            }
            // 结尾
            if (stack.length === 0) {
                accessNode.right =  new TreeNode(val);
                break;
            }
            continue;
        }
        if (orderNode.right) {
            stack.push(orderNode.right);
        }
        stack.push(orderNode, null);
        if (orderNode.left) {
            stack.push(orderNode.left);
        }
    }
    return root;
};

const root = [61, 46, 66, 43, null, null, null, 39, null, null, null], val = 88;
const treeRoot = createTree(root);
const newRoot = insertIntoBST(treeRoot, val);

console.log(levelOrder(newRoot));