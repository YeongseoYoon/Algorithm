function solution(numbers) {
    const answer = [];
    for(let i =0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            answer.push(numbers[i]+ numbers[j]);
        }
    }
    const newSet = new Set(answer);
    
    return Array.from(newSet).sort(function (a,b){return a-b});
}