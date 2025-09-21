// Positive, Negative, or Zero


let num = 0;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}



//Even or Odd
let number = 13

if (number % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}


//Voting Eligibility


let age = 16;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not yet eligible to vote.");
}



//Largest of Two Numbers

let a = 25
let b = 20;

if (a > b) {
    console.log(a + " is larger");
} else if (b > a) {
    console.log(b + " is larger");
} else {
    console.log("Both numbers are equal");
}



// 5. Discount Calculator

let price = 120

if (price > 100) {
    let discount = price * 0.10;
    let finalPrice = price - discount;
    console.log("Final Price after 10% discount: $" + finalPrice);

} else {
    console.log("Final Price: $" + price);
}