function solution(code) {
    let mode = 0;
    
    const ret = Array.from(code).reduce((acc, char, idx) => {
        if (char === '1') {
            mode = 1 - mode; 
            return acc;
        }
        
        if ((mode === 0 && idx % 2 === 0) || (mode === 1 && idx % 2 !== 0)) {
            return acc + char;
        }
        
        return acc;
    }, '');

    return ret === '' ? 'EMPTY' : ret;
}