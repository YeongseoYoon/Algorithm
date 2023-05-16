function solution(s) {
    let answer = [];
    let count = 0;
    
    while(s.length>0){
        let index = 0;
        let x = 0;
        let y = 0;
        for (let i = 0; i < s.length; i++) {
            s[0] === s[i] ? x++: y++;  
            if (x === y) {
                index = i + 1;
                break;
            }
        }
        count++;
        s = s.slice(index);
        if(index === 0) break;
    }

    return count;
}