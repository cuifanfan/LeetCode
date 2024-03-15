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
