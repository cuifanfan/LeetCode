function getSum(n: number): number {
    let v = n, ans = 0;
    while (v > 0) {
        ans += (v % 10) ** 2;
        v = Math.floor(v / 10);
    }
    return ans;
}

function isHappy(n: number): boolean {
    const set: Set<number> = new Set();
    let result = n;
    while (result !== 1) {
        result = getSum(result);
        if (set.has(result)) {
            return false;
        } else {
            set.add(result);
        }
    }
    return true;
};