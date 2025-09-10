const addStrNum = (str) => {
    

    if (typeof str === 'number' || typeof str === 'object') {
        return 'plese input string'
    }

    let sum = 0
    const strSplit = str.split('')

    for (const s of strSplit) {
        const numberStr = parseInt(s)
        if (!isNaN(parseInt(s))) {
           sum+=numberStr
        }


    }   

    return sum

}


// console.log(addStrNum(1+2+5));

console.log(addStrNum('1+3a+4,4'));