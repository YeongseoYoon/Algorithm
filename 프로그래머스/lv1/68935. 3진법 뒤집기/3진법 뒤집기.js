function solution(n) {
    let concatStr = "";
    
    //3진법으로 저장
    let toTernary= n.toString(3);
    
    //뒤집어서 저장
    //split reverse join 한꺼번에 사용하지 않고 구현해보기
    //맨뒤 잘라서 앞에다 붙이기
    for(let i=toTernary.length; i>0; i--){
        concatStr += toTernary.substring(i-1, i);
        toTernary = toTernary.substring(0, i);
    }
    
    //3진법을 10진법 치환
    return parseInt(concatStr,3);
}