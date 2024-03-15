/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    const set = new Set(['+', '-', '*', '/'])
    for (let str of tokens) {
        let result = str;
        if (set.has(str)) {
            const num1 = Number(stack.pop())
            const num2 = Number(stack.pop())
            if (str === '+') {
                result = num2 + num1;
            } else if (str === '-') {
                result = num2 - num1;
            } else if (str === '*') {
                result = num2 * num1;
            } else if (str === '/') {
                result = Math.trunc(num2 / num1);
            }
        }
        stack.push(result);
    }
    return stack.pop()
};