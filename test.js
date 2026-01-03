function printPositions(arr) {
    arr.forEach((value, index) => {
        if (value <= 10) {
            console.log(`A[${index}] = ${value}`);
        }
    });
}

printPositions([1, 2, 100, 0, 30]);

/*
A[0] = 1
A[1] = 2
A[3] = 0
*/