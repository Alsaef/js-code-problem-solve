// this global e this er value hoite sea window

// methord object this er value object

// e5 e hobe window object => function => function

// es6 hobe object  object => function => function / jodi methord es 5 hoi

// es6 hobe window  object => function => function / jodi methord es 6 hoi

// constactor function e this er value mt object

// console.log(this === window); // In a browser, this will be true


// function fan() {
//     console.log(this);
// }

// fan()


// const myObject={
//     name:'al saef ratul',
//     myFan:function () {
//         console.log(this.name);
//     }
// }

// console.log(myObject.name);


const myObject={
    name:'al saef ratul',
    myFan:function(){
       let fn=()=>{
         console.log(this);
       }

       fn()
    }
}

console.log(myObject.myFan());

