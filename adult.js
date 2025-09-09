const peoples = [
  { name: "tamim", age: 18 },
  { name: "wasi", age: 20 },
  { name: "Charlie", age: 17 }
];


function adultP(peoples) {
  peoples.map(people=> console.log(people.age>=18?`${people.name} adult`:`${people.name} not adult`))
  return
}


console.log(adultP(peoples));
