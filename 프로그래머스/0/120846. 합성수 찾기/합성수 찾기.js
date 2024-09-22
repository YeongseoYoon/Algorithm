function solution(n) {

    return n - countPrimesUpToN(n) - 1;
}

function countPrimesUpToN(n) {
    if (n <= 1) return 0;
    
    let primes = [];
    let isPrime = new Array(n + 1).fill(true);
    
    isPrime[0] = isPrime[1] = false;
    
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
        
        if (primes.length === n) break;
    }
    
    return primes.length;
}


