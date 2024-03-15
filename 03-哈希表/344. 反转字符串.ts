export {}
function swap(arr: string[], i: number, j:number):void {
    const temp:string = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let i = 0, j = s.length - 1;
    while (i < j) {
        swap(s, i, j);
        i++;
        j--;
    }
};