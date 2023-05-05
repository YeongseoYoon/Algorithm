function solution(n, lost, reserve) {
    lost = lost.sort();
    reserve = reserve.sort();
    let temp = reserve.slice();
    
    for(let i in temp){
        let key = lost.indexOf(temp[i]) 
        if(key !== -1){
            lost.splice(key, 1);
            reserve.splice(reserve.indexOf(temp[i]),1);
        }
    }
    
    for(let i of reserve){
        let key = lost.includes(i-1) ? lost.indexOf(i-1): lost.indexOf(i+1);
        if(key !== -1){
            lost.splice(key,1);
        }
    }
    return n-lost.length;
}