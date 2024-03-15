/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    let ans = sum;
    for (let i = 1; i < nums.length - k; i++) {
        sum = sum - nums[i] + nums[i + k];
        ans = Math.max(ans, sum);
    }
    return ans;
};

const nums = [1,3,-1,-3,5,3,6,7], k = 3

console.log(maxSlidingWindow(nums));