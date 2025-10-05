const peoples = [
  { name: "tamim", age: 18 },
  { name: "wasi", age: 20 },
  { name: "Charlie", age: 17 }
];


function adultP(peoples) {
 let x= peoples.map(people=> {
   return people.age>=18?`${people.name} adult`:`${people.name} not adult`
  })

 
  return x
  
}


console.log(adultP(peoples));
