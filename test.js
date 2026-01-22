function findEven(arr) {
    let minDivisions = Infinity;
    for (let num of arr) {
        let divisions = 0;
        while (num % 2 === 0) {
            num = num / 2;
            divisions++;
        }
        if (divisions < minDivisions) minDivisions = divisions;
    }
    console.log(minDivisions);
}
findEven([8, 12, 40]) // 2
findEven([5, 6, 8, 10]) // 0