function solution(numbers, hand) {
    // 2, 5, 8, 0은 현재의 위치를 따짐
    // 거리가 같으면 hand를 보기
    let lPosition = [3, 0]; 
    let rPosition = [3, 2];  
    let answer = '';
    
    for(let i=0; i<numbers.length; i++){
        const num = numbers[i];
        
        if(num === 1 || num === 4 || num === 7){
            answer += 'L';
            lPosition = getPosition(num);
        }else if (num === 3 || num === 6 || num === 9) {
            answer += 'R';
            rPosition = getPosition(num);
        }else{
            const targetPos = getPosition(num);
            const leftDis = getDistance(lPosition, targetPos);
            const rightDis = getDistance(rPosition, targetPos);
            
            if(leftDis > rightDis){
                answer += 'R';
                rPosition = getPosition(num);
            }else if(leftDis < rightDis){
                answer += 'L';  
                lPosition = getPosition(num);
            }else{
                if(hand === "left"){
                    answer += 'L';  
                    lPosition = getPosition(num);
                }else{
                    answer += 'R';  
                    rPosition = getPosition(num);
                }
            }
            
            
        }
        
    }
    
    return answer;
}

function getDistance(pos1, pos2) {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}

function getPosition(num) {
    switch(num) {
        case 1: return [0, 0];
        case 2: return [0, 1];
        case 3: return [0, 2];
        case 4: return [1, 0];
        case 5: return [1, 1];
        case 6: return [1, 2];
        case 7: return [2, 0];
        case 8: return [2, 1];
        case 9: return [2, 2];
        case '*': return [3, 0];
        case 0: return [3, 1];
        case '#': return [3, 2];
    }
}