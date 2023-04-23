function solution(start, end) {
    const arr = Array(end-start+1).fill(start);
    return arr.map((x, idx) => x+idx);
}