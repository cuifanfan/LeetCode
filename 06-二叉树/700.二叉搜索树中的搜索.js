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
        const size = queue.size();
        for (let i = 0; i < size; i++) {
            const popNode = queue.pop();
            ans.push(popNode.val);
            if (popNode.left) queue.push(popNode.left);
            if (popNode.right) queue.push(popNode.right);
        }

    }

    return ans;
};
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {    
    if (root === null || root.val === val) {
        return root;
    }
    return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val);
};

var searchBST = function(root, val) {    
    while (root !== null && root.val !== val) {
        root = root.val > val ? root.left : root.right;
    }
    return root;
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

const root = [4,2,7,1,3], val = 2;
const treeRoot = createTree(root);
const resultRoot = searchBST(treeRoot, val);
const result = levelOrder(resultRoot);
console.log(result);