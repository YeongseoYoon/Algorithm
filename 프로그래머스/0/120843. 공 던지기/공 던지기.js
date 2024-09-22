function solution(numbers, k) {
    let answer = 1;
    for(let i =1; i<k; i++){
        answer += 2;
        if(answer > numbers.length) answer -= numbers.length; 
    }
    return answer;
}