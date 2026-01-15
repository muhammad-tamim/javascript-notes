```js
const fs = require('fs');

// for codeforces input
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

// for general input
const input = fs.readFileSync('input.txt', 'utf8').trim().split(/\s+/);

// input boiler plate for n numbers of array: 
const N = Number(input[0]);

let A = [];
for (let i = 0; i < N; i++) {
    A.push(Number(input[i + 1]));
}
```