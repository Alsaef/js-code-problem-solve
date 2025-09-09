const peoples = [
    { name: "tamim", age: 18 },
    { name: "wasi", age: 0 },
    { name: "y", age: 17 },
    { name: "z", age: 18 },
    { name: "w", age: 20 },
    { name: "xy", age: 17 }
];


function filterAge(peoples) {


    const filter = peoples.filter(people => people.age >= 25)
    if (filter.length === 0) {
        return 'no 25 years people';
    }
    return filter


}

console.log(filterAge(peoples));