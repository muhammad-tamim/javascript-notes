function checkCode(A, B, arr) {

    let answer = true

    for (let i = 0; i < arr.length; i++) {
        if (arr[A + 1 - 1] !== '-') {
            answer = false
            break
        }
        if ((arr[i] >= 0 && arr[i] <= 9) || (arr[i] === '-')) {
            answer = true
        }
        else {
            answer = false
        }
    }
    console.log(answer ? "Yes" : "No")
}

checkCode(3, 3, [2, 6, 9, '-', 6, 6, 5]); // Yes
checkCode(1, 1, [1, 2, '-']); // No
checkCode(1, 2, [7, 4, 4, 4]); // No