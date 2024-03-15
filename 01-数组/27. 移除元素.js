
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  /**
   * @param {number[]} nums
   * @param {number} val
   * @return {number}
   */
  var removeElement = function(nums, val) {
    // 快慢指针法
    let fastIndex = 0;
    let slowIndex = 0;
    const length = nums.length;
    while (fastIndex < length) {
      if (nums[fastIndex] !== val) {
        nums[slowIndex] = nums[fastIndex];
        slowIndex++;
      }
      fastIndex++;
    }
    nums.length = slowIndex;
    return nums.length;
  };