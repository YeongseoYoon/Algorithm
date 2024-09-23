function solution(my_string) {
    return my_string.split('').filter(char => !['a','e','i','o','u'].includes(char.toLowerCase())).join('');
}