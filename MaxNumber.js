function MaxNumber(...numbers) {
    let maxArry=numbers[0]

    for (const num of numbers) {
       if (num > maxArry) {
        max=num
       }
    }


    return max

}

console.log(MaxNumber(1,2,3,4,7,9));