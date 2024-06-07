function solution(a, d, included) {
    return included.reduce((acc, curr, index) => {
        if (curr) {
            return acc + (a + index * d);
        }
        return acc;
    }, 0);
}