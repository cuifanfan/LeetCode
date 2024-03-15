function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const countArray: Array<number> = new Array(26).fill(0);
    const privot: number = 'a'.charCodeAt(0); // UniCode码
    
    for (let i = 0; i < s.length; i++) {
        countArray[s[i].charCodeAt(0) - privot]++;
        countArray[t[i].charCodeAt(0) - privot]--;
    }
    return countArray.every(i => i === 0);
};