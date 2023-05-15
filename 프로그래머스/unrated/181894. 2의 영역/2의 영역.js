function solution(arr) {
    if(!arr.includes(2)){
        return [-1];
    }
    let index1, index2 = 0;
    
    for(let i=0; i<arr.length;i++){
        if(arr[i] === 2 ){
            index1 = i;
            break;
        }
    }
    
    for(let i=arr.length-1; i>=0;i--){
        if(arr[i] === 2){
            index2 = i;
            break;
        }
    }
    
    return arr.slice(index1,index2+1);
}