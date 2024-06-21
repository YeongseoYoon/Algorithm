function solution(number){
    return number.split('').reduce((acc, curr) => {
        return acc + parseInt(curr,10);
    }, 0) % 9;
}