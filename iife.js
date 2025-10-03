// Immediately Invoked Function Expressions IIFE

(function () {
   console.log('es5 IIFE'); 
})();

(()=>{
    console.log('es6 IIFE');  
})();



// async IIFE with await
(async function () {
   const data = await Promise.resolve("ES5 style async IIFE done");
   console.log(data); 
})();

(async () => {
   const data = await Promise.resolve("ES6 style async IIFE done");
   console.log(data);
})();
