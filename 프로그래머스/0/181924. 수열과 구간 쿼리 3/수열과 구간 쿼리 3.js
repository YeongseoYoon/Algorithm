function solution(arr, queries) {
    for (let query of queries) {
        const [i, j] = query;
        
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    
    return arr;
}