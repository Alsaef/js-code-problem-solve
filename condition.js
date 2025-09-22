// conditions :

//  if else  , else if 

// switch 

// ternary operator



// let age = 20

// if (age>=20) {
//     console.log('age largest');
// }else{
//     console.log('age Lowest');
// }

// let num=10

// let num1=20

// if (num>num1) {
//     console.log('num is largest');
// }else{
//    console.log('num1 is largest'); 
// }

// const num12=12%2

// console.log(num12);


// even or odd 

let number=13

if (number % 2 ===0) {
    console.log('even');
}else{
    console.log('odd');
}



//  Falsy values (only 7 in total):

// These always evaluate to false in Boolean context:

// false

// 0 (zero)

// -0 (negative zero)

// "" (empty string)

// null

// undefined

// NaN (Not a Number)


if (0) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // output
}



// Truthy values (everything else):

// All values other than falsy values are truthy, e.g.:

// true

// Non-zero numbers: 1, -1, 3.14

// Non-empty strings: "hello", " "

// Objects: {}, []

// Functions: function(){}

// Dates: new Date()

// Symbols: Symbol("id")

// BigInt: 1n, -5n

if ("hello") {
  console.log("Truthy"); // output
}


