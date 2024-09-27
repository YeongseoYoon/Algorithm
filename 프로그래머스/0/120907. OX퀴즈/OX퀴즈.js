function solution(quiz) {
    const result = [];
    for(let i =0; i< quiz.length; i++){
        const [x,operator,y,_,quizResult]=quiz[i].split(' ');
        const newResult = operator === '+'? parseInt(x) + parseInt(y): parseInt(x) - parseInt(y)
        
        
        newResult == quizResult ? result.push('O'): result.push('X'); 
    }
    return result;
}