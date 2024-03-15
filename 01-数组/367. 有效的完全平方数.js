/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    // 二分法
    let left = 0;
    let right = num;
    while (left <= right) {
      const mid = left + ((right - left) >> 1);
      if (mid * mid < num) {
        left = mid + 1;
      } else if (mid * mid > num) {
        right = mid - 1;
      } else {
        return true;
      }
    }
    return false;
  };