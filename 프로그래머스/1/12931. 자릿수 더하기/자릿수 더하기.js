function solution(n) {
    return (n+'').split('').reduce((acc, curr) => Number(acc) + Number(curr), 0);
}