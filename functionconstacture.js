// this global e this er value hoite sea window

// methord object this er value object

// e5 e hobe window object => function => function

// es6 hobe object  object => function => function / jodi methord es 5 hoi

// es6 hobe window  object => function => function / jodi methord es 6 hoi

// constactor function e this er value mt object

// console.log(this === window); // In a browser, this will be true


//  Es5 Function this Value Object
// function fan() {
//     console.log('Es5',this);
// }

// fan()

// // Es6 function this Value Window
// const fanTwo=()=>{
//   console.log("Es6",this);
// }

// fanTwo()



// object
const myObject={
    name:'al saef ratul',
    myFan:function () {
        // console.log(this);
        return this
    }
}

console.log(myObject.myFan());

// window

const myObject2={
    name:'al saef ratul',
    myFan: ()=> {
        // console.log(this);
        return this
    }
}

console.log(myObject2.myFan());



// object
// const myObj={
//     name:'al saef ratul',
//     myFan:function () {
//         // console.log(this);
//         return this.name
//     }
// }

// // myObj.name='ratul'
// myObj.name='al saef'

// console.log(myObj.myFan());

// const myObject={
//     name:'al saef ratul',
//     myFan:function(){
//        let fn=()=>{
//          console.log(typeof this);
//            console.log(this);
//        }

//        fn()
//     }
// }

// console.log(myObject.myFan());


// const object2={
//   nam:'ratul',
//   myFan:()=>{
//     let fn=()=>{
//       console.log('type check',typeof this);
//       console.log('window',this);
//     }
//     fn()
//   }
// }

// console.log(object2.myFan());



function myFunc(name,age) {
   
  this.namE=name

  this.AGE=age

   
  

}

let myFan=new myFunc('ratul',22)

console.log(myFan);

// console.log(myFunc('ratul',22));

// constactor functon new keyword use korle object hoiea jai