function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    const length = nums.length;
    const ans = [];

    // 绝对值最小的索引
    let minIndex = 0;
    for (let i = 0; i < length; i++) {
        if (Math.abs(nums[i]) < Math.abs(nums[minIndex])) minIndex = i;
    }
    let i = minIndex - 1, j = minIndex;
    while (true) {
        if (i === -1) {
            while (j < length) ans.push(nums[j++] ** 2);
            break;
        }

        if (j === length) {
            while (i > -1) ans.push(nums[i--] ** 2);
            break;
        }

        if (Math.abs(nums[i]) <= Math.abs(nums[j])) ans.push(nums[i--] ** 2);
        else ans.push(nums[j++] ** 2);
    }
    return ans;
};