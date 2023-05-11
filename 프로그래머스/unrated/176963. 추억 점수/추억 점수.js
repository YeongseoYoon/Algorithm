function solution(name, yearning, photo) {
    const answer = [];
    let temp = 0;
    
    for(let i=0; i<photo.length; i++){
        for(let j=0; j<photo[i].length; j++){
            for(let k=0; k<name.length;k++){
                if(name[k] === photo[i][j]){
                    temp += yearning[k];
                }
            }

        }   
        answer.push(temp);
        temp = 0;
    }
    return answer;
}