function solution(strings, n) {
    const answer = [];
    
    for(let i=0; i<strings.length; i++){
        const nthWord = strings[i][n];
        strings[i] = nthWord + strings[i];
    }
    
    strings.sort();
    
    for(let i=0; i<strings.length; i++){
        const string = strings[i].replace(strings[i][0],'');
        answer.push(string);
    }
    
    return answer;
    
}