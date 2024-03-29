function tailCallOptimize(f) {
    let value
    let active = false
    const accumulated = []
    return function accumulator() {
        accumulated.push(arguments)
        if (!active) {
            active = true
            while (accumulated.length) {
                value = f.apply(this, accumulated.shift())
            }
            active = false
            return value
        }
    }
}

const fn = tailCallOptimize(function (n, a = 0, b = 1) {
    if (n === 0) return a
    return fn(n - 1, b, a + b)
})
console.log(fn(5)); // return 5
