function solution(my_string) {
    return [...my_string]
        .map(char => parseInt(char))
        .filter(num => !isNaN(num))
        .reduce((sum, num) => sum + num, 0);
}