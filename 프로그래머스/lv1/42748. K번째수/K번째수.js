function solution(array, commands) {
    let answer = [];
    
    for(let i =0; i<commands.length;i++){
        let arr1 = array.slice(commands[i][0]-1, commands[i][1]);
        arr1.sort((a,b)=> a-b);
        answer.push(arr1[commands[i][2]-1]);
    }
    
    return answer;
}