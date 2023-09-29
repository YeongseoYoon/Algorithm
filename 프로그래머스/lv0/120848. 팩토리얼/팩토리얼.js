function solution(n) {
    let acc=1;
    let answer=1;
    
    while(true){
        acc *=answer;
        
        if(acc === n){
            return answer;
        }else if(acc>n){
            return answer-1;
        }
        answer++;
    }
}