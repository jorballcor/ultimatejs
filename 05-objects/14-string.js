let greet = "Hello World";
let bye  = new String("Goodbye World");

console.log(typeof greet); // string
console.log(typeof bye);   // object

console.log(greet.length); // 11

console.log(greet.indexOf("aoeu")); // -1 (not found)
console.log(greet.indexOf("Wo"));   // 6 (found at index 6)

console.log(greet.includes("World")); // true

let newGreet = greet.replace("World", "Everyone");
console.log(newGreet, greet); // Hello Everyone Hello World

console.log(greet.toUpperCase()); // HELLO WORLD
console.log(greet.toLowerCase()); // hello world

console.log(greet.substring(0, 5)); // Hello
console.log(greet.substr(2, 4)) // llo W (Deprecated, but still works)

const spaceString = "   Hello World   ";
console.log(spaceString.trim()); // Hello World
console.log(spaceString.trimStart()); // "Hello World   "
console.log(spaceString.trimEnd()); // "    Hello World"

