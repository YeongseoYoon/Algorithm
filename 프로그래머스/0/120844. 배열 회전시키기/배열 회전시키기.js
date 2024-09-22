function solution(numbers, direction) {
    return direction === "left" ? [...numbers.slice(1),numbers[0]] : [numbers[numbers.length-1],...numbers.slice(0, -1)];
}