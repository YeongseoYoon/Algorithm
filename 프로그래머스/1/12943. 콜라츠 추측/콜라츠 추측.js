function solution(num) {
    return collatzRecursive(num, 0);
}

const collatzRecursive = (num, count) => {
    if (num === 1) {
        return count;
    }
    
    if (count >= 500) {
        return -1;
    }
    
    if (num % 2 === 0) {
        return collatzRecursive(num / 2, count + 1);
    } else {
        return collatzRecursive(num * 3 + 1, count + 1);
    }
}