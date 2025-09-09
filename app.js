// function revers(str) {
//     let strArray=str.split('*')
//     console.log(strArray);
    
      
//     for (let i = 0; i < strArray.length; i++) {
//         const strcount = strArray[i];


//         if (strcount.includes('*')) {
            
//         return strArray.join("")
            
//         }else{
//             return strArray.reverse().join("")
//         };
        
//     }

// }

// console.log(revers('he*llo'));



let str='he*llo'

let re=str.split('')
let result=[]
for (let index =str.length; index >= 0; index--) {
    if (str[index]!=='*'){
        const element = str[index];  
        
        result.push(element)

        
    }
}

let u=result.join('')

console.log(u);