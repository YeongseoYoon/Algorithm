function solution(q, r, code) {
    return [...code].filter((val, index) => index % q === r ).join('');
    
}