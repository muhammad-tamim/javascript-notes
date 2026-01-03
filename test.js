function replacePosAndNeg(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) arr[i] = 1;
        else if (arr[i] < 0) arr[i] = 2;
    }
    return arr;
}

console.log(replacePosAndNeg([1, -2, 0, 3, 4])); // [ 1, 2, 0, 1, 1 ]