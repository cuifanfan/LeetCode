/**
 * @param {number[][]} array
 * @return {number[]}
 */
var spiralArray = function(array) {
  const ans = [];
  if (array.length === 0) return ans;

  const cols = array.length, rows = array[0].length;
  let x1 = 0, x2 = rows - 1, y1 = 0, y2 = cols - 1;
  while (x1 <= x2 && y1 <= y2) {
      for (let i = x1; i <= x2; i++) {
          ans.push(array[y1][i]);
      }
      for (let j = y1 + 1; j <= y2; j++) {
          ans.push(array[j][x2])
      }
      if (x1 < x2 && y1 < y2) {
          for (let i = x2 - 1; i > x1; i--) {
              ans.push(array[y2][i]);
          }
          for (let j = y2; j > y1; j--) {
              ans.push(array[j][x1]);
          }
      }
      x1++;
      x2--;
      y1++;
      y2--;
  }
  return ans;
};