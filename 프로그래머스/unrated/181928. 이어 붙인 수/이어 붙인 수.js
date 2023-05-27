function solution(num_list) {
    let oddString = "";
    let evenString = "";
    num_list.map(x => x%2 ===0? evenString+=x:oddString+=x);
    return parseInt(oddString,10)+parseInt(evenString,10);
}