function reversingArray(arr) {

    const reverseArr = []

    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i])
    }

    return reverseArr

}

console.log(reversingArray([5, 1, 3, 2]).join(" ")); // 2 3 1 5
console.log(reversingArray([1, 2, 3, 4, 5]).join(" ")); // 5 4 3 2 1
