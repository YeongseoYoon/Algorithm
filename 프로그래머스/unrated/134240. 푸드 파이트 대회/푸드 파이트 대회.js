function solution(food) {
    let answer = '';
    for(let i =1; i<food.length; i++){
        for(let j =1; j<=food[i]/2; j++){
            answer+=i; 
        }
    }
    const reversed= answer.split('').reverse().join('');
    return answer+"0"+reversed;
}