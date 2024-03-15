function canConstruct(ransomNote: string, magazine: string): boolean {
    const helpArr:number[] = new Array(26).fill(0);
    for (let m of magazine) {
        const index:number = m.charCodeAt(0) - 'a'.charCodeAt(0);
        helpArr[index]++;
    }
    for (let r of ransomNote) {
        const index = r.charCodeAt(0) - 'a'.charCodeAt(0);
        if (helpArr[index] < 1) {
            return false;
        }
        helpArr[index]--;
    }
    return true;
};