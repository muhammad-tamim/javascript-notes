function findLowestNumberAndPosition(arr) {
    let lowestNumber = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= lowestNumber) {
            lowestNumber = arr[i]
        }
    }

    const lowestIndex = arr.indexOf(lowestNumber) + 1

    console.log(lowestNumber, lowestIndex)
}


findLowestNumberAndPosition([1, 2, 3]); // 1 1
findLowestNumberAndPosition([5, 6, 2, 3, 2]); // 2 3