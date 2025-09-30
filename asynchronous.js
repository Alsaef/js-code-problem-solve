

// console.log('start');

// setTimeout(() => {
//     console.log('middle');
// }, 2000);

// console.log('end');


// use callback
// function fetchData(callback) {
//     console.log('start');
//     setTimeout(() => {
//         callback('data loading....')
//     }, 2000);

//     console.log('end');
// }

// fetchData((data)=>{
//    console.log(data);
// })

// promise

// const fetchData = new Promise((resolve, reject) => {
//     console.log('start');
//   setTimeout(() => {
//     resolve("Data come");
//   }, 2000);
//   console.log('end');
// });

// fetchData.then((data) => console.log(data));


// async/await






// synchronous

console.log('start');

function wait() {
    for (let i = 0; i < 50000000; i++) {
        console.log(i);
        
    }
}

wait()

console.log('end');


// asynchronous

console.log('start');

function wait() {
   setTimeout(() => {
     for (let i = 0; i < 50000000; i++) {
        console.log(i);
        
    }
   }, 2000);
}

wait()

console.log('end');