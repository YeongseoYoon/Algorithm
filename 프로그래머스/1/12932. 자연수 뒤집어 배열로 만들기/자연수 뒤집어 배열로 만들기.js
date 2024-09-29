function solution(n) {
    const result = [];
    while(n){
        result.push(n % 10);
        n = Math.floor(n / 10);
    }
    return result;
}