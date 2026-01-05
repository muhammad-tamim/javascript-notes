function findSmallestResult(T, N, A) {

    let resultArr = []

    for (let i = T - 1; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) {
            const result = A[i] + A[j] + (j - i)
            resultArr.push(result)
        }
    }

    let smallestResult = resultArr[0]

    for (let result of resultArr) {
        if (smallestResult >= result) {
            smallestResult = result
        }
    }

    console.log(smallestResult)
}

findSmallestResult(1, 4, [20, 1, 9, 4]) // 7