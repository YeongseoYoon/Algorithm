function solution(num_list) {
    let oddSum = 0;
    let evenSum = 0;
    
    num_list.map((element,index)=> index%2===0?evenSum+=element:oddSum+=element);
    
    return evenSum>=oddSum ? evenSum : oddSum;
}