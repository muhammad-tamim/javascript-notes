function findIdx(arr, X) {
    return arr.findIndex(element => element === X);
}

console.log(findIdx([3, 0, 1], 0)); // 1
console.log(findIdx([1, 3, 0, 4, 5], 10)); // -1
console.log(findIdx([2, 3, 2, 1], 2)); // 0