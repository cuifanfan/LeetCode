function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  /**
   * @param {number[]} nums
   * @return {void} Do not return anything, modify nums in-place instead.
   */
  var moveZeroes = function(arr) {
    // 双指针
    const length = arr.length;
    let slowIndex = 0;
    for (let fastIndex = 0; fastIndex < length; fastIndex++) {
      if (arr[fastIndex] !== 0) {
        arr[slowIndex] = arr[fastIndex];
        slowIndex++;
      }
    }
    for (let i = slowIndex; i < length; i++) {
      arr[i] = 0;
    }
  };