
var MyQueue = function () {
    this.inStack = []
    this.outStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.outStack.length) {
        return this.outStack.pop()
    }
    while (this.inStack.length) {
        this.outStack.push(this.inStack.pop())
    }
    return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    const value = this.pop()
    this.outStack.push(value)
    return value;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.inStack.length === 0 && this.outStack.length === 0
};





class Node {
    constructor(val) {
        this.next = null
        this.prev = null
        this.val = val
    }
}

class Queue {
    constructor(val) {
        this.head = null
        this.tail = null
        if (val !== undefined) {
            const node = new Node(val);
            this.head = node;
            this.tail = node;
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
    }


    peek() {
        if (!this.head) {
            return null
        }
        return this.head.val
    }

    empty() {
        return this.head === null;
    }
}
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
const queue = new Queue();
queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
const pop1 = queue.pop()
queue.push(5)
const pop2 = queue.pop()
const pop3 = queue.pop()
const pop4 = queue.pop()
const pop5 = queue.pop()
console.log(pop1, pop2, pop3, pop4, pop5);