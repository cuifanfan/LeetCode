/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = x, middle = Math.floor(left + ((right - left) >> 1));
    while (left <= right) {
      if (middle * middle < x) {
        left = middle + 1;
      } else if (middle * middle > x) {
        right = middle - 1;
      } else {
        break;
      }
      middle = Math.floor(left + ((right - left) >> 1));
    }
    return middle;
  };