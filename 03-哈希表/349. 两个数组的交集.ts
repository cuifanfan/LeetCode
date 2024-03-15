function intersection(nums1: number[], nums2: number[]): number[] {
    const set: Set<number> = new Set();
    const ans: Set<number> = new Set();

    for (const num1 of nums1) {
        set.add(num1);
    }

    for (const num2 of nums2) {
        if (set.has(num2)) {
            ans.add(num2);
        }
    }
    return [...ans];
};