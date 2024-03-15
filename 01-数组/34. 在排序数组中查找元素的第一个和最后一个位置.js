/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0; 
    let r = nums.length - 1;
    while (l <= r) {
      let m = Math.floor(l + ((r - l) >> 1));
      if (nums[m] < target) {
        l = m + 1;
      } else if (nums[m] > target) {
        r = m - 1;
      } else {
        let start = m, end = m;
        while (nums[start] === nums[m]) {start--}
        while (nums[end] === nums[m]) {end++}
        return [start + 1, end - 1];
      }
    }
    return [-1, -1]
  };