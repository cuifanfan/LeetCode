function strStr(haystack: string, needle: string): number {
    let ans:number = -1;
    for (let i = 0; i < haystack.length; i++) {
        ans = i;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
               ans = -1;
               break;
            }
        }
        if (ans !== -1) return ans;
    }
    return ans;
};