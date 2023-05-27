function solution(a, b) {
    return parseInt(a+""+b,10)>=parseInt(b+""+a,10)?parseInt(a+""+b,10):parseInt(b+""+a,10);
}