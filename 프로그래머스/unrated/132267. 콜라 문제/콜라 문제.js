function solution(a, b, n) {
    let answer = 0;
    let mod = 0;
    let quotient = 0;
    
    while(n>=a){
        mod = n%a;
        quotient = parseInt(n/a);
        answer += quotient*b;
        n = quotient*b+mod;
    }
    
    return answer;
}