/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        '[':']',
        '{':'}',
        '(':')',
    };
    const stack = []
    for (let str of s) {
        if (map[stack[stack.length - 1]] === str) {
            stack.pop()
        } else {
            stack.push(str)
        }
    }
    return stack.length === 0;
};