// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  
// 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

// 值在[left, right]，比较条件需要带等号，因为left==right有意义
var search = function(arr, target) {
  let ans = -1;
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor(left + (right - left) >> 1);
  while (left <= right) {
    if (arr[middle] < target) {
      left = middle + 1;
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else {
      ans = middle;
      break;
    }
    middle = Math.floor(left + ((right - left) >> 1));
  }
  return ans;
};

// 主要区别在于区间定义，值在[left, right)
var search = function(arr, target) {
  let ans = -1;
  let left = 0;
  let right = arr.length;
  let middle = Math.floor(left + (right - left) >> 1);
  while (left < right) {
    if (arr[middle] < target) {
      left = middle + 1;
    } else if (arr[middle] > target) {
      right = middle;
    } else {
      ans = middle;
      break;
    }
    middle = Math.floor(left + ((right - left) >> 1));
  }
  return ans;
};

const arr = [-1,0,3,5,9,12];
console.log(search(arr, 9));