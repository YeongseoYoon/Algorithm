function solution(num) {
    if (num === 1) return 0;
    
    let count = 0; 
    let currentNum = num;
    
    while (count < 500 && currentNum !== 1) {
        if (currentNum % 2 === 0) {
            currentNum = currentNum / 2;
        }
        else {
            currentNum = (currentNum * 3) + 1;
        }
        count++;
    }
    
    return currentNum === 1 ? count : -1;
}