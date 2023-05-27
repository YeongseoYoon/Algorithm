function solution(strArr) {
    return strArr.map((x, idx) => idx % 2===0 ? x.toLowerCase():x.toUpperCase());
}