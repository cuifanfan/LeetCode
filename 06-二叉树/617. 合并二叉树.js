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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    // 1. 确定递归出口
    if (root1 === null) {
        return root2;
    }
    if (root2 === null) {
        return root1;
    }
    // 2. 确定单层递归逻辑
    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    // 3. 确定单层递归用到的变量和返回值
    return root1;
};

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    if (root1 === null) {
        return root2;
    }
    if (root2 === null) {
        return root1;
    }
    const queue = new MyQueue();
    queue.push(root1);
    queue.push(root2);

    while (!queue.empty()) {
        const size = queue.size();
        for (let i = 0; i < size; i += 2) {
            const popNode1 = queue.pop();
            const popNode2 = queue.pop();
            // root1, root2节点都存在
            popNode1.val += popNode2.val;

            // 两个左子树都不为空
            if (popNode1.left !== null && popNode2.left !== null) {
                queue.push(popNode1.left);
                queue.push(popNode2.left);
            }
            // 两个右子树都不为空
            if (popNode1.right !== null && popNode2.right !== null) {
                queue.push(popNode1.right);
                queue.push(popNode2.right);
            }

            // root1左子树为空
            if (popNode1.left === null && popNode2.left !== null) {
                popNode1.left = popNode2.left;
            }
            // root1右子树为空
            if (popNode1.right === null && popNode2.right !== null) {
                popNode1.right = popNode2.right;
            }
        }
    }
    return root1;
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

const arr1 = [1, 3, 2, 5], arr2 = [2, 1, 3, null, 4, null, 7];
const root1 = createTree(arr1), root2 = createTree(arr2)
const mergedRoot = mergeTrees(root1, root2);
const levelOrderResults = levelOrder(mergedRoot);
console.log(levelOrderResults);