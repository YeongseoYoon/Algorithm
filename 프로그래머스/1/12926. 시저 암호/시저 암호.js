function solution(s, n) {
    return s.split('').map(char => {
        if (char === ' ') return ' ';
        
        const ascii = char.charCodeAt(0);
        
        if (ascii >= 65 && ascii <= 90) {
            return String.fromCharCode(
                ((ascii - 65 + n) % 26) + 65
            );
        }
        
        if (ascii >= 97 && ascii <= 122) {
            return String.fromCharCode(
                ((ascii - 97 + n) % 26) + 97
            );
        }
        
        return char;
    }).join('');
}