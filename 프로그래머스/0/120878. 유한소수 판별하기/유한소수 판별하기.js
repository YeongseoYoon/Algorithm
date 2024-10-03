function solution(a, b) {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    
    let denominator = b / gcd(a, b);
    
    if (denominator === 1) return 1;
    
    while (denominator % 2 === 0) denominator /= 2;
    while (denominator % 5 === 0) denominator /= 5;
    
    return denominator === 1 ? 1 : 2;
}