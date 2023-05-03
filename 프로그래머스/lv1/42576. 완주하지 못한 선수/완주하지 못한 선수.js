function solution(participant, completion) {
    let answer = "";    
    const participantArr = participant.sort();
    const completionArr = completion.sort();
    
    console.log(participantArr);
        console.log(completionArr);

    for(let i=0; i<participantArr.length; i++){

        if(participantArr[i] !== completionArr[i]){
             return answer = participantArr[i];
            
        }

    }

}