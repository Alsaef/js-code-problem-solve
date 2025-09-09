// function Evenodd(number) {
//     if (number % 2===0) {
//         return'events' ;
//     }else{
//          return'odd' ;
//     }
// }

// console.log(Evenodd(2));


const myArray = [0,1,2,3,4,4,4,5,6,7,8,9,10];

const filtered = myArray.filter( (value, index, array) => {
  return value % 2 == 0;
});

const filtered2 = filtered.filter( (value, index, array) => {
  return array.indexOf(value) == index;
});

console.log(filtered2);