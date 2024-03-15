/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 快慢指针
    const length = nums.length;
    let slowIndex = 0;
    for (let fastIndex = 0; fastIndex < length; fastIndex++) {
      if (nums[slowIndex] != nums[fastIndex]) {
        nums[++slowIndex] = nums[fastIndex];
      }
    }
    return slowIndex + 1;
  };