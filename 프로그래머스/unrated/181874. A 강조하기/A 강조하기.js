function solution(myString) {
    
    return myString.split("").map((char) => {
        if(char === 'a' || char === 'A') {
            return 'A'
        } else {
            return char.toLowerCase()
        }
    }).join('');
}