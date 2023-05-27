function solution(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] >= 50 && arr[i]%2 ===0){
            arr[i] = parseInt(arr[i]/2,10);
        }else if(arr[i] < 50 && arr[i]%2 !==0){
            arr[i] = arr[i]*2;
        }
    }
    return arr;
}