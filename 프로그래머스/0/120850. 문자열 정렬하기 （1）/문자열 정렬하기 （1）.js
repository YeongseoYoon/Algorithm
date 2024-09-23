function solution(my_string) {
     return my_string
        .split('')
        .filter(char => !isNaN(parseInt(char)))
        .map(Number)
        .sort((a, b) => a - b);
}