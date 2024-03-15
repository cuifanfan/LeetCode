function fourSum(nums: number[], target: number): number[][] {
    nums.sort((x, y) => x - y);    
    const ans: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target && nums[i] >= 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        for (let j = i + 1; j < nums.length; j++) {
            // 二级剪枝
            if (nums[i] + nums[j] > target && nums[i] + nums[j] >= 0) {
                break;
            }
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            let m = j + 1, n = nums.length - 1;
            while (m < n) {
                const sum = nums[i] + nums[j] + nums[m] + nums[n];
                if (sum === target) {
                    ans.push([nums[i], nums[j], nums[m], nums[n]]);
                    m++;
                    n--;
                    // 三级剪枝
                    while (m < n && nums[m] === nums[m - 1]) {
                        m++;
                    }
                    while (m < n && nums[n] === nums[n + 1]) {
                        n--;
                    }
                } else if (sum < target) {
                    m++;
                } else {
                    n--;
                }
            }
        }
        
    }
    return ans;
};