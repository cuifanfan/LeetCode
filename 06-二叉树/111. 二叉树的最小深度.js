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
 * @return {number[]}
 */
var minDepth = function (root) {
    let ans = 0;
    const queue = new MyQueue();
    if (root) queue.push(root);
    while (!queue.empty()) {
        const size = queue.size();
        ans++;
        for (let i = 0; i < size; i++) {
            const popNode = queue.pop();
            
            if (popNode.left === null && popNode.right === null) {
                return ans;
            }

            if (popNode.left) queue.push(popNode.left);
            if (popNode.right) queue.push(popNode.right);
        }
        
    }
    return ans;
};

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
// [3, 9, 20, null, null, 15, 7]
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

const ans = minDepth(root);
console.log(ans);