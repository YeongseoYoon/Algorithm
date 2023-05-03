function solution(lines) {
    const lineCount = new Array(200).fill(0);
    let answer = 0;
    
    for (let i = 0; i < 3; i++) {
        const left = lines[i][0];
        const right = lines[i][1];

        for (let j = left; j < right; j++) {
            lineCount[j + 100] += 1;
        }
    }
    
    for (let i in lineCount) {
        if (lineCount[i] >= 2) {
            answer += 1;
        }
    }
    
    return answer;
}