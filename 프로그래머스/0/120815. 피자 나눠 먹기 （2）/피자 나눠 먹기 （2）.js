const caculate_gcd = (a,b) => {
    return b === 0 ? a : caculate_gcd(b, a % b);
}


function solution(n) {
    return n / caculate_gcd(n, 6);
}