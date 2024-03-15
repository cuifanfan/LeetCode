/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const ans = [];
    const rows = matrix.length, cols = matrix[0].length;
    let x1 = 0, x2 = cols - 1, y1 = 0, y2 = rows - 1;

    while (x1 <= x2 && y1 <= y2) {
        // x轴正向
        for (let i = x1; i <= x2; i++) {
            ans.push(matrix[y1][i]);
        }
        // y轴反向
        for (let j = y1 + 1; j <= y2; j++) {
            ans.push(matrix[j][x2]);
        }
        if(x1 < x2 && y1 < y2) {
            // x轴反向
            for (let i = x2 - 1; i > x1; i--) {
                ans.push(matrix[y2][i]);
            }
            // y轴正向
            for (let j = y2; j > y1; j--) {
                ans.push(matrix[j][x1]);
            }
        }
        x1++;
        y1++;
        x2--;
        y2--;
    }
    return ans;
};