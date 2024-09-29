function solution(s){

    const newStr = s.toLowerCase();
    return newStr.split('p').length === newStr.split('y').length ? true: false;
}