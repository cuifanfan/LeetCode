/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    const stack = []
    for (let str of s) {
        if (str === stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(str);
        }
    }
    return stack.join('');
};