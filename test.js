const text = "cat cats";
const regex = /cat(?:s)?/g;

console.log(text.match(regex)); // ['cat', 'cats']
