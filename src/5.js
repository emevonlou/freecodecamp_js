// Number: Some cares

//Type: Infinity
console.log(7 / 0);

// Js takes the string and divides it naturally.
console.log("20" / 2);
console.log('3' - 2);

// Concatenando/ o sinal de mais faz sentido na concatenação. por isso não soma, concatena.
console.log('3' + 2) // string ganha!

// Error
console.log("No!" * 2);

// You have to specify the type of floating point operation
// some operations may have some kind of inaccuracy because of this
console.log(0.1 + 0.7);

// unexpected token
// console.log(10.toString())
// correct form:
console.log((10.345).toFixed(2))