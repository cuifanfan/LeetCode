function reverseStr(s: string, k: number): string {
    const strArr:string[] = Array.from(s);
    for (let i = 0; i < strArr.length; i += 2 * k) {
        let m:number = i, n:number = Math.min(i + k, strArr.length) - 1;
        while (m < n) {
            const temp:string = strArr[m];
            strArr[m] = strArr[n];
            strArr[n] = temp;
            m++;
            n--;
        }
    }
    return strArr.join('');
};