function solution(arr, idx) {
    const result = arr.findIndex((value, index) => index >= idx && value === 1);
    
    return result === -1 ? -1 : result;
}