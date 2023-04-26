function solution(d, budget) {
    let answer = 0;

    d.sort((a, b) => a - b);
    let sum = 0;
    for(let i = 0; i < d.length; i++) {
        if(budget < sum + d[i]){
            break;
        }
        sum += d[i];
        answer++;
    }

    return answer;
}