function Fibonacci(N) {
    let arr = []
    let fibonacci = 0
    for (let i = 1; i <= N; i++) {
        if (i === 1) {
            arr[0] = 0
            fibonacci = 0
        }
        if (i === 2) {
            arr[1] = 1
            fibonacci = 1
        }
        if (i >= 3) {
            fibonacci = arr[1] + arr[0]
            arr[0] = arr[1]
            arr[1] = fibonacci
        }
    }
    console.log(fibonacci)
}

Fibonacci(2)
Fibonacci(5)