function solution(X, Y) {
    const countX = {};
    const countY = {};
    let answer = "";
    
    for(let i=0; i<X.length;i++){
        countX[X[i]] = (countX[X[i]] || 0)+1;
    }
    for(let i=0; i<Y.length;i++){
        countY[Y[i]] = (countY[Y[i]] || 0)+1;
    }
    
    for(let i=9; i>=0;i--){
        answer += String(i).repeat(Math.min(countX[i],countY[i]));
    }
    
    if(parseInt(answer,10) === 0){
        return "0";
    }else if(answer.length === 0){
        return "-1";
    }
    
    return answer;    

}