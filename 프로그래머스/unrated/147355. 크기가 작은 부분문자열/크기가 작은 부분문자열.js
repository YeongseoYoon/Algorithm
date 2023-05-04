function solution(t, p) {
    let answer = 0;
    const length = p.length;
    const numArr = [];
    
    for(let i=0; i<t.length-length+1; i++){
        const temp = t.substring(i, i+length);
        if(temp.length == length){
            numArr.push(temp);
        }else{
            continue;
        }
    }
    
    for(let i=0; i<numArr.length; i++){
        if(Number(numArr[i]) <= Number(p))
           answer++;
    }

    return answer;
}