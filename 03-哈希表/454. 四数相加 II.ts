function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let count: number = 0;
    const sumMap: Map<number, number> = new Map();
    // nums1, nums2数组组成的map
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            const sum: number = nums1[i] + nums2[j];
            const preCount: number = sumMap.get(sum) ?? 0;
            sumMap.set(sum, preCount + 1);
        }
    }

    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            const sum = nums3[i] + nums4[j];
            if (sumMap.has(0 - sum)) {
                count += sumMap.get(0 - sum) ?? 0;
            }
        }
    }

    return count;
}