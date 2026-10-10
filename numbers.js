// проверка на простоту числа
function isPrime(n){
    if (n<2) return false;
    if (n===2) return true;
    if (n%2===0) return false;

    for (let i=3; i<=Math.sqrt(n); i+=2){
        if (n%i===0) return false;
    }
    return true;
}

//первые N простых чисел
function firstNPrimes(n){
    const primes = [];
    let num = 2;
    while (primes.length<n){
        if (isPrime(num)) primes.push(num);
        num++;
    }
    return primes
}
console.log('первые 10 простых чисел')
console.log(firstNPrimes(10))

//Все делители числа N
function findDivisiors(n){
    const divisiors = [];
    for (let i=1; i<=Math.sqrt(n); i++){
        if (n%i===0){
            divisiors.push(i)
            if (i!==n/i){
                divisiors.push(n/i)
            }
        }
    }
    return divisiors.sort((a, b)=>a-b);
}
console.log('Все делители числа 72')
console.log(findDivisiors(72))

//Разложение на простые множители
function primeFactorization(n) {
    const factors = {};
    let divisor = 2;    
    while (n > 1) {
        while (n % divisor === 0) {
            factors[divisor] = (factors[divisor] || 0) + 1;
            n /= divisor;
        }
        divisor++;
    }
    return factors;
}
console.log('Разложение на простые множители числа 360')
console.log(primeFactorization(360))

//Проверка на число Фибоначчи
function isFibonacci(n) {
    if (n < 0) return false;
    let a = 0, b = 1;
    while (b < n) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b === n || n === 0;
}


//Пифагоровы тройки
function findPTriples(N, M) {
    const triples = [];
    for (let a = N; a <= M; a++) {
        for (let b = a; b <= M; b++) {
            const c = Math.sqrt(a * a + b * b);
            if (c === Math.floor(c) && c <= M) {
                triples.push([a, b, c]);
            }
        }
    }   
    return triples;
}
console.log('Все Пифагоровы тройки в значениях от 1 до 30')
console.log(findPTriples(1, 30))