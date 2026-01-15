const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim().split(/\s+/);

const N = Number(input[0]);
let A = [];
for (let i = 0; i < N; i++) {
    A.push(Number(input[i + 1]));
}


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

findEven(A)
