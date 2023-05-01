function solution(s) {
    let numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;

    for(let i=0; i< numArr.length; i++) {
        answer = answer.split(numArr[i]).join(i);
    }

    return parseInt(answer);
}