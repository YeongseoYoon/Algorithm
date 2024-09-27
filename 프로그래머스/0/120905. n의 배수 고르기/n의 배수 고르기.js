function solution(n, numlist) {
    return numlist.reduce((acc, curr) => {
        if(curr % n === 0){
            acc.push(curr);
        }
        return acc;
    }, []);
}