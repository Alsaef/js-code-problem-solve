
// console.log(0==''); true

// console.log(false == "0"); true

console.log(0.1 + 0.2); //0.30000000000000004

// solve

const mathNum=Math.round((0.1 + 0.2) * 100)

// const dectmel=mathNum.toFixed(2)

console.log(mathNum);


var funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(function() { console.log(i); });
}
funcs.forEach(f => f()); // prints 3,3,3 (not 0,1,2)
