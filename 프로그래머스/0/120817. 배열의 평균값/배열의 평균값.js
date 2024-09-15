function solution(numbers) {
    const hap = numbers.reduce((acc, curr) => acc + curr);
    const answer = hap/(numbers.length).toFixed(1);
    return answer;
}