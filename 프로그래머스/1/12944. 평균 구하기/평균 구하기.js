function solution(arr) {
    return arr.reduce((acc, curr) => {
        acc+=curr;
        return acc;
    },0)/arr.length;
}