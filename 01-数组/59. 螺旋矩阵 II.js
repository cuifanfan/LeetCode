/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const ans = new Array(n).fill(0).map(() => new Array(n).fill(0));
  const cols = ans.length, rows = ans[0].length;
  let x1 = 0, y1 = 0, x2 = rows - 1, y2 = cols - 1, k = 1;
  while (x1 <= x2 && y1 <= y2) {
      for (let i = x1; i <= x2; i++) {
          ans[y1][i] = k++;
      }
      for (let j = y1 + 1; j <= y2; j ++) {
          ans[j][x2] = k++;
      }
      if (x1 < x2 && y1 < y2) {
          for (let i = x2 - 1; i > x1; i--) {
              ans[y2][i] = k++;
          }
          for (let j = y2; j > y1; j--) {
              ans[j][x1] = k++;
          }
      }
      x1++;
      x2--;
      y1++;
      y2--;
  }
  return ans;
};