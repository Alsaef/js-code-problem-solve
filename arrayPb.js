// even number
const numbers=[1,2,3,4,5,6,7,8,9,10]

const  filterEvenNum=numbers.filter(num=>num%2===0)

console.log('even numbers',filterEvenNum);


// odd number
const numbers2=[1,2,3,4,5,6,7,8,9,10]

const  filterOddNum=numbers2.filter(num=>num%2!==0)

console.log('odd numbers',filterOddNum);


// Filtering by condition
const numbers3=[4,5,6,7,8,3,2,4]

const conditionNumber=numbers3.filter(num=>num>3)

console.log('condition filter',conditionNumber);


// finding even number
const numbers4=[43,33,45,65,77,44,99,55,55]

const findingEvenNumber=numbers4.find(num=>num%2===0)

console.log('finding even num',findingEvenNumber);