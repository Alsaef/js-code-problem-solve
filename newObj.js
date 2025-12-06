const user={
    name:'Ratul',
    adress:'Narsingdi',
    email:'ratul@gmail.com'
}
const key=Object.keys(user)
const value=Object.values(user)
console.log(
`${key}:${value}`

);

const ObjConvArray=Object.values(user)

// ObjConvArray.forEach(value=>console.log(value))

// for (let key in user) {
//   console.log(user[key]);
// }

// output is: [ 'Ratul', 'Narsingdi', 'ratul@gmail.com' ]