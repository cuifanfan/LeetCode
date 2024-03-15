function threeSum(nums: number[]): number[][] {
    nums.sort((x, y) => x - y);    
    const ans: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                ans.push([nums[i], nums[j], nums[k]]);
                // 去重
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] === nums[k + 1]) {
                    k--;
                }
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return ans;
};