// 1. Positive, Negative, or Zero
function checkNumber(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}
checkNumber(10);  
checkNumber(-5);  
checkNumber(0);   


// 2. Even or Odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
checkEvenOdd(7);  
checkEvenOdd(4);  


// 3. Voting Eligibility
function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not yet eligible to vote.");
  }
}
checkVotingEligibility(20); 
checkVotingEligibility(15); 


// 4. Largest of Two Numbers
function findLargest(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is larger");
  } else if (num2 > num1) {
    console.log(num2 + " is larger");
  } else {
    console.log("Both numbers are equal");
  }
}
findLargest(10, 20); 
findLargest(15, 15); 


// 5. Discount Calculator
function calculateDiscount(price) {
  if (price > 100) {
    let discount = price * 0.10;
    let finalPrice = price - discount;
    console.log("Final Price after 10% discount: $" + finalPrice);
  } else {
    console.log("Final Price: $" + price);
  }
}
calculateDiscount(150); 
calculateDiscount(90);  
