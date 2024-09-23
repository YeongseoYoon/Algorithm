function solution(n) {
    let factors = new Set();
    let divisor = 2;

    while (n > 1) {
        if (n % divisor === 0) {
            factors.add(divisor);
            n /= divisor;
        } else {
            divisor++;
        }
    }

    return Array.from(factors).sort((a, b) => a - b);
}