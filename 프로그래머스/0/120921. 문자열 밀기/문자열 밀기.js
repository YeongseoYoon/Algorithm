function solution(A, B) {
    if (A === B) return 0;
    if (A.length !== B.length) return -1;
    
    let chars = A.split('');
    for (let i = 0; i < A.length; i++) {
        chars.unshift(chars.pop());
        if (chars.join('') === B) return i + 1;
    }

    return -1;
}