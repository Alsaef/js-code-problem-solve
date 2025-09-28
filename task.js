// problem 1
function primeNum(num) {
    let isPrime = true;

    if (num <= 1) {
        return isPrime = false
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return isPrime = false
        }

    }

    return isPrime

}

console.log(primeNum(10));

// problem 2
function reverseString(str) {


    if (typeof str !== 'string' || str.length === 0) {
        return "Invalid input";
    }

    let reverse = '';
    let i = str.length - 1;

    while (i >= 0) {
        reverse += str[i];
        i--;
    }

    return reverse

}

console.log(reverseString('hello'));

//problem 3
function sumOfMultiples(n) {
    let sum = 0

    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }

    }

    return sum
}

console.log(sumOfMultiples(19));

// problem 4

function countPassingStudents(score) {
    let count = 0

    for (let i = 0; i < score.length; i++) {
        if (score[i] >= 60) {
            count++
        }

    }

    return count
}

console.log(countPassingStudents([55, 70, 45, 80, 90]));

//problem5
function guessingGame(userGuess) {
    let guess = userGuess;
    let randomNumber = Math.floor(Math.random() * 10) + 1

    if (guess === randomNumber) {
        return `Correct! The number was ${randomNumber}`
    } else if (guess > randomNumber) {

        return `Too high! The number was ${randomNumber}`

    } else {
        return `Too low! The number was ${randomNumber}`;
    }
}

console.log(guessingGame(5));