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
 * @return {number}
 */
var countNodes = function(root) {    
    const queue = new MyQueue();
    if (root) queue.push(root);
    let ans = 0;
    while (!queue.empty()) {
        const size = queue.size();
        for (let i = 0; i < size; i++) {
            const popNode = queue.pop();
            if (popNode.left) queue.push(popNode.left);
            if (popNode.right) queue.push(popNode.right);
            ans++;
        }
    }
    return ans;
};

// 递归

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {    
    if (root === null) return 0;
    return countNodes(root.left) + countNodes(root.right) + 1;
};

// 针对完全二叉树的解法
var countNodes = function(root) {  
    if (root === null) return 0;

    let leftNode = root.left, leftNum = 0;
    let rightNode = root.right, rightNum = 0;
    while (leftNode) {
        leftNum++;
        leftNode = leftNode.left;
    }
    while (rightNode) {
        rightNum++;
        rightNode = rightNode.right;
    }

    if (leftNum === rightNum) {
        return 2 ** (leftNum + 1) - 1;
    }

    return countNodes(root.left) + countNodes(root.right) + 1;
};

