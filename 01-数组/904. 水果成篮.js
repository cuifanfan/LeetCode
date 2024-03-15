/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  // 找至多包含两种元素的最长子串，返回其长度
  // 滑动窗口

  // 优化：哈希表
  let i = 0, j = 0;
  let ans = 0;
  let kind = new Map(); // 种类及出现次数
  kind.set(fruits[i], 1);
  while (i <= j && j < fruits.length) {
    if (kind.size > 2) {
      kind.set(fruits[i], kind.get(fruits[i]) - 1);
      if (kind.get(fruits[i]) === 0) kind.delete(fruits[i]);
      i++;
    } else {
      ans = Math.max(ans, j - i + 1);
      j++;
      kind.set(fruits[j], kind.has(fruits[j]) ? kind.get(fruits[j]) + 1: 1);
    }
  }
  return ans;
};