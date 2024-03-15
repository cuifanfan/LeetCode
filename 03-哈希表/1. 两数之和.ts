function twoSum(nums: number[], target: number): number[] {
    const ans: [number, number] = [0, 0];
    const targetMap: Map<number, number> = new Map(); // 值->下标
    for (let i = 0; i < nums.length; i++) {
        const index: number = targetMap.get(nums[i]) ?? -1;
        if (targetMap.has(nums[i])) {
            return [index, i]
        } else {
            targetMap.set(target - nums[i], i);
        }
    }
    return ans;
};