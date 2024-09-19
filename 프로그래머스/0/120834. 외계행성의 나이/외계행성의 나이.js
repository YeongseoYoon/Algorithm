function solution(age) {
    const ageMap = {}
    
    for(let i=0; i<=9; i++){
         ageMap[i] = String.fromCharCode(97 + i);
    }
    return (""+age).split('').map((i)=> ageMap[i]).join('');
}