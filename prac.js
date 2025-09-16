let age=18

let newAge=age

age=20

newAge=30
console.log('age' , age);

console.log('newAge' , newAge);

// refrence type

let array = [1,2,3,4,5]

let newArray=[...array]  // copy array ...  copy  spread operator 

array.pop()

console.log(array);
console.log(newArray);