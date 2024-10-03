function solution(n) {
    let count = 0;
    let number = 0;
    
    while (count < n) {
        number++;
        if (isValid(number)) {
            count++;
        }
    }
    
    return number;
}

function isValid(num) {
    if (num % 3 === 0) return false;
    
    while (num > 0) {
        if (num % 10 === 3) return false;
        num = Math.floor(num / 10);
    }
    
    return true;
}