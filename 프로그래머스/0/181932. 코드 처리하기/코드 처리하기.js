function solution(code) {
    let ret = [];
    let mode = 0;
    
    for (let idx = 0; idx < code.length; idx++) {
        if (code[idx] === "1") {
            mode = 1 - mode;
        } else {
            if (mode === 0 && idx % 2 === 0) {
                ret.push(code[idx]);
            }
            else if (mode === 1 && idx % 2 === 1) {
                ret.push(code[idx]);
            }
        }
    }
    
  
    return ret.length > 0 ? ret.join('') : "EMPTY";
}