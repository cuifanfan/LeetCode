function reverseWords(s: string): string {
    let ans: string = '';
    let word:string = '';
    let firstBlank = false;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s.charCodeAt(i) === ' '.charCodeAt(0)) {
            if (firstBlank) {
                ans = ans + ' ' + word;
                word = '';
                firstBlank = false;
            }
            
        } else {
            if (!firstBlank) {
                firstBlank = true;
            }
            word = s[i] + word;
        }
    }
    ans = ans + ' ' + word;
    return ans.trim();
};