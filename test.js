let text = "Give 100%!";
const pattern = /\W/g;

let result = text.match(pattern);
console.log(result) // ['G', 'i', 'v', 'e', ' ', '%', '!']