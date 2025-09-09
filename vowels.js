function vowelsCount(str) {
    if (typeof str!=='string') {
        return 'please valid input'
    }

  let count=0;

  let strC=str.toLocaleLowerCase().split('')
  
  let vowels=['a','e','i','o','u']

  for (let i = 0; i < strC.length; i++) {
    
    console.log(strC[i]);

    if (vowels.includes(strC[i])) {
       count++
    }
   
    
  }


  return count
  
}

console.log(vowelsCount('hello'));