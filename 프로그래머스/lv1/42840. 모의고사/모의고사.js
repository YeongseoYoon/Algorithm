function solution(answers) {
    const answer = [];
    const supoja1 = [1, 2, 3, 4, 5];
    const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let score = [0, 0, 0];

    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === supoja1[i % supoja1.length]) 
            score[0]++;
        if(answers[i] === supoja2[i % supoja2.length]) 
            score[1]++;
        if(answers[i] === supoja3[i % supoja3.length]) 
            score[2]++;
    }

    const max = Math.max(...score);
    for(let i = 0; i < score.length; i++) {
        if(max === score[i]) 
            answer.push(i + 1);
    }
    
    return answer;
}