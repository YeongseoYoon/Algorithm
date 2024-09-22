function solution(n) {
     function factorial(i) {
        if (i === 0 || i === 1) {
            return 1;
        }
        return i * factorial(i - 1);
    }
    
    let i = 0;
    while (true) {
        if (factorial(i) <= n) {
            i++;
        } else {
            return i - 1;
        }
    }
}

