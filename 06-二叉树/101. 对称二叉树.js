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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const queue = new MyQueue();
    if (root) queue.push(root);
    while (!queue.empty()) {
        const size = queue.size();
        const help = [];
        for (let i = 0; i < size; i++) {
            const popNode = queue.pop();
            if (popNode) {
                help.push(popNode.val);
                queue.push(popNode.left);
                queue.push(popNode.right);
            } else {
                help.push(null);
            }
        }
        let i = 0, j = help.length - 1;
        while (i < j) {
            if (help[i] !== help[j]) {
                return false;
            }
            i++;
            j--;
        }
    }
    return true;
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

const ans = isSymmetric(root);
console.log(ans);


// 使用递归

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(left, right = left) {
    if (left === null && right === null) return true;
    if (left === null && right !== null) return false;
    if (left !== null && right === null) return false;
    if (left.val !== right.val) return false;
    return isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left);
};

// 使用队列
var isSymmetric = function(root) {
    if (!root) return true;
    const queue = new MyQueue();
    queue.push(root.left);
    queue.push(root.right);
    while (!queue.empty()) {
        const leftNode = queue.pop();
        const rightNode = queue.pop();
        if (leftNode === null && rightNode === null) {
            continue;
        }

        if (leftNode === null || rightNode === null || leftNode.val !== rightNode.val) {
            return false;
        }

        queue.push(leftNode.left);
        queue.push(rightNode.right);
        queue.push(leftNode.right);
        queue.push(rightNode.left);
    }
    return true;
};

// 使用栈
var isSymmetric = function(root) {
    if (!root) return true;
    const stack = [];
    stack.push(root.left);
    stack.push(root.right);
    while (stack.length !== 0) {
        const rightNode = stack.pop();
        const leftNode = stack.pop();
        if (rightNode === null && leftNode === null) {
            continue;
        }

        if (rightNode === null || leftNode === null || leftNode.val !== rightNode.val) {
            return false;
        }
        stack.push(rightNode.left);
        stack.push(leftNode.right);
        stack.push(rightNode.right);
        stack.push(leftNode.left);
    }
    return true;
};
