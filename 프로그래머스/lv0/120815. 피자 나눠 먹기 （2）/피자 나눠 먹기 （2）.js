function solution(n) {
    let answer = 1;
    while(true){
        if(6*answer/n === parseInt(6*answer/n,10)){
            return answer;
        }
        answer++;
    }
}