function solution(n) {
    let sqrt = Math.floor(Math.sqrt(n));
    return sqrt * sqrt === n ? Math.pow(sqrt + 1, 2) : -1;
}