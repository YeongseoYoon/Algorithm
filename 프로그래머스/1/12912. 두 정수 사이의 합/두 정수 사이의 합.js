function solution(a, b) {
    let result = 0;
    if(a === b){
        return a;
    }
    
    for(let i =Math.min(a,b); i<=Math.max(a,b);i++){
        result += i;
    }
    return result;
}