
var MyQueue = function () {
    this.inStack = []
    this.outStack = []
    this.size = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.inStack.push(x);
    this.size++
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    this.size--;
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
    return this.size === 0 
};


var MyStack = function() {
    this.queue = new MyQueue()
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let size = this.queue.size;
    while (--size) {
        this.queue.push(this.queue.pop());
    }
    console.log(this.queue);
    return this.queue.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const value = this.pop();
    this.push(value);
    return value;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.empty();
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

