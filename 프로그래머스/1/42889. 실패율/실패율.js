function solution(N, stages) {
    const failureRates = [];
    
    for(let i = 1; i <= N; i++) {
        // 현재 스테이지
        const currentStage = stages.filter(stage => stage === i).length;

        // 도달한 스테이지
        const reachedStage = stages.filter(stage => stage >= i).length;
        
        const failureRate = reachedStage === 0 ? 0 : currentStage / reachedStage;
        
        failureRates.push({stage: i, rate: failureRate });
    }

     failureRates.sort((a, b) => 
        b.rate === a.rate ? a.stage - b.stage : b.rate - a.rate
    );
    
    return failureRates.map(({stage})=> stage);
    
 
}