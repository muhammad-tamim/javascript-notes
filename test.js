function summation(arr) {
    return Math.abs(
        arr.reduce((sum, element) => sum + element, 0)
    );
}

console.log(summation([7, 2, 1, 3]));   // 13
console.log(summation([-1, 2, -3]));   // 2