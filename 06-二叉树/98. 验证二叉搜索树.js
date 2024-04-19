// 中序遍历
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let prev = null;
    const stack = [root];
    while (stack.length !== 0) {
        const orderNode = stack.pop();
        if (orderNode === null) {
            const accessNode = stack.pop();
            if (prev && prev.val >= accessNode.val) {
                return false;
            }
            prev = accessNode;
            continue;
        }
        orderNode.right && stack.push(orderNode.right);
        stack.push(orderNode, null);
        orderNode.left && stack.push(orderNode.left);
    }
    return true;
};

var isValidBST = function (root) {
    if (root === null) {
        return true;
    }
    if (root.left) {
        let curr = root.left;
        while (curr.right) {
            curr = curr.right;
        }
        if (curr.val >= root.val) {
            return false;
        }
    }

    if (root.right) {
        let curr = root.right;
        while (curr.left) {
            curr = curr.left;
        }
        if (curr.val <= root.val) {
            return false;
        }
    }
    return isValidBST(root.left) && isValidBST(root.right);
}

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

const root = [2, 1, 3];
const treeRoot = createTree(root);
console.log(isValidBST(treeRoot));