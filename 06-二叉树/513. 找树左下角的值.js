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
var findBottomLeftValue = function (root) {
    const queue = new MyQueue();
    queue.push(root);
    let ans = null;
    while (!queue.empty()) {
        let size = queue.size();
        const popNode = queue.pop();
        popNode.left && queue.push(popNode.left);
        popNode.right && queue.push(popNode.right);
        ans = popNode.val;
        while (--size) {
            const popNode = queue.pop();
            popNode.left && queue.push(popNode.left);
            popNode.right && queue.push(popNode.right);
        }
    }
    return ans;
};

var findBottomLeftValue = function (root) {
    let ans = root.val, maxDepth = 1;
    function leftBottomVal(node, depth) {
        // 递归出口
        if (node.left === null && node.right === null) {
            // 同层取最左边（同层depth相同，maxDepth在同层第一个depth时被赋值）
            if (depth > maxDepth) {
                ans = node.val;
                maxDepth = depth;
            }
        } 
        // 进入左节点（回溯）
        if (node.left) {
            depth++;
            leftBottomVal(node.left, depth);
            depth--;
        } 
        // 进入右节点（回溯）
        if (node.right) {
            depth++;
            leftBottomVal(node.right, depth);
            depth--;
        }
    }
    leftBottomVal(root, maxDepth + 1);
    return ans;
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

const arr = [0,null,-1];
const root = createTree(arr);

console.log(findBottomLeftValue(root));