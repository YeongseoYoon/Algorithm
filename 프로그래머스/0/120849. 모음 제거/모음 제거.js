function solution(my_string) {
    return [...my_string].filter(char => !['a','e','i','o','u'].includes(char.toLowerCase())).join('');
}