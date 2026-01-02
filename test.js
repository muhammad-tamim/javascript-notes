let text = "Hellooo World! Hello W3Schools!";
const pattern = /lo*/g;

let result = text.match(pattern);
console.log(result) // [ 'l', 'looo', 'l', 'l', 'lo', 'l' ]