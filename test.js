const regex = /c.t/;

console.log("cat".match(regex)[0]); // ["cat"]
console.log("c.t".match(regex));  // null