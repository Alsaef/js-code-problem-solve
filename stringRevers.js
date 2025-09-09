function StrRevers(str) {
    if (typeof  str !=='string') {
        return 'plese valid type';
    }
    const strR=str.split('').reverse().join('')
return strR
    
}

console.log(StrRevers('hello'));