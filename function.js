// function firstFn(){
//     console.log('hello');
// }

// firstFn()


// function secondFn(name) {
//     console.log(name);
// }

// secondFn('ratul')



// const Numbers=(nums)=>{
// console.log(nums);

// }

// Numbers(1)


//defult value

// function MyName(name) {
    
//     return [name,120]
// }

// console.log(MyName('ratul'));

// console.log(typeof null);


// function myName(name) {
   
//   if (name==='ratul') {
//     console.log('currect');
//     return 'correct'
//   }else{
//     console.log('incurrect');
//      return 'incorrect'
//   }
   
// }



// console.log(myName('ratuls'));



function nameOfLength(names) {
   let result=[]

   for(let i=0;i<names.length;i++){
    // console.log(names[i].length);

     result.push(names[i].length)  
   }

   return result
}

console.log(nameOfLength(['ratul','arafat','suvo','wasi']));
