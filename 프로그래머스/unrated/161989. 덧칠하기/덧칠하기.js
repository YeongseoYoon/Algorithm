function solution(n, m, section) {
    let answer = 0;
    let painted = 0;
    for(let i=0; i<section.length; i++) {
        if(painted < section[i]) {
            answer++;
            painted = section[i]+m-1;
        }
    }
    return answer;
}