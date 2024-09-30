function solution(polynomial) {
    let xCoefficient = 0;
    let constant = 0;
    
    for (const term of polynomial.split(' + ')) {
        if (term.includes('x')) {
            xCoefficient += term === 'x' ? 1 : parseInt(term);
        } else {
            constant += parseInt(term);
        }
    }
    
    const result = [];
    if (xCoefficient !== 0) {
        result.push(xCoefficient === 1 ? 'x' : `${xCoefficient}x`);
    }
    if (constant !== 0) {
        result.push(constant.toString());
    }
    
    return result.length === 0 ? '0' : result.join(' + ');
}
