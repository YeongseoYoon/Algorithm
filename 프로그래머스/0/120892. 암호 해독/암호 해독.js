function solution(cipher, code) {
    return [...cipher].map((item, index) => (index+1)%code===0 ? item : '' ).join('');
}