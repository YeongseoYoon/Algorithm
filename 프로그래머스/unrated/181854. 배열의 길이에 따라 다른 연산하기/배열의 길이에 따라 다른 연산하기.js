function solution(arr, n) {
    
    return arr.length % 2 === 0 ? arr.map((x,index) => index % 2 !== 0 ? x+n: x): arr.map((x,index) => index % 2 === 0 ? x+n: x);
}