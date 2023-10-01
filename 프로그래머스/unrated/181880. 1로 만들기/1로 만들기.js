function solution(num_list) {
    let count = 0;
    num_list.map(element =>{
        let number = element;
        while(number>1){
            number = number % 2===0?number/2:(number-1)/2; 
            count++;
        }
    })
    return count;
}