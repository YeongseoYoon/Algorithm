function solution(a, b) {
    const length = Math.min(a.length, b.length);
    let hap = 0;
    
    for(let i=0; i<length; i++){
        hap += a[i]*b[i];
    }
    
    return hap;
    
}