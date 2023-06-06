function solution(my_string) {
    const calArr = my_string.split(" ");
    let answer = 0;
    
    for(let i =0; i<calArr.length; i=i+2){
        if(i === 0){
            answer += parseInt(calArr[i],10);
        }else{
            calArr[i-1] === "+" ? answer += parseInt(calArr[i],10) : answer -= parseInt(calArr[i],10); 
        }
    }
    
    return answer;
}