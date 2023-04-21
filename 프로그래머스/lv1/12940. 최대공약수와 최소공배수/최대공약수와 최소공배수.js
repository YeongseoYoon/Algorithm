function solution(n, m) {
    const gcd = calculateGcd(n, m);
    const lcm = (n * m) / gcd;

    return [gcd, lcm];
}

function calculateGcd(a, b) {
  if (b === 0) return a;
    return a > b ? calculateGcd(b, a % b) : calculateGcd(a, b % a);
}