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
checkNumber(10);  // Positive
checkNumber(-5);  // Negative
checkNumber(0);   // Zero


// 2. Even or Odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
checkEvenOdd(7);  // Odd
checkEvenOdd(4);  // Even


// 3. Voting Eligibility
function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not yet eligible to vote.");
  }
}
checkVotingEligibility(20); // Eligible
checkVotingEligibility(15); // Not eligible


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
findLargest(10, 20); // 20 is larger
findLargest(15, 15); // Both equal


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
calculateDiscount(150); // Discount applied
calculateDiscount(90);  // No discount
