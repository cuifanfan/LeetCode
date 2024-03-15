/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 一眼滑动窗口
  let ans = Infinity;
  let i = 0;
  let j = 0;
  let sum = nums[0];
  while (i <= j && j < nums.length) {
    if (sum < target) sum+=nums[++j];
    else {
      // 大于等于
      ans = Math.min(ans, j - i + 1);
      sum -= nums[i++];
    }
  }
  return ans === Infinity ? 0 : ans;
};