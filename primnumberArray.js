function PrimeNum(numbers) {
    let primes = []
    for (const num of numbers) {
        if (num <= 1) continue;
        let isPrime = true;
        let limit = Math.sqrt(num)

        for (let i = 0; i < limit; i++) {
            if (num % i === 0) {
                isPrime = false;

                break;
            }

        }


        if (isPrime) {
            primes.push(num);
        }

    }

    return primes


}

console.log(PrimeNum([2, 3, 4, 5, 6, 7, 11, 12]));