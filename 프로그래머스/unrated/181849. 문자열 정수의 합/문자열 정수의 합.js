function solution(num_str) {
    return num_str.split('').map(x => parseInt(x)).reduce((arr,curr) => arr + curr);
}