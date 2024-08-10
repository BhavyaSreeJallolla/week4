let str = "Hello, World!"; // String
let num = 42;              // Number
let bool = true;           // Boolean
let nul = null;            // Null
let undef;                 // Undefined
let sym = Symbol('id');    // Symbol

console.log(str, typeof str); // "Hello, World!" "string"
console.log(num, typeof num); // 42 "number"
console.log(bool, typeof bool); // true "boolean"
console.log(nul, typeof nul); // null "object" (this is a quirk in JavaScript)
console.log(undef, typeof undef); // undefined "undefined"
console.log(sym, typeof sym); // Symbol(id) "symbol"
