function solution(arr) {
    const rows = arr.length;
    const cols = arr[0].length;
    
    const maxSize = Math.max(rows, cols);
    
    const result = Array.from({length: maxSize}, () => 
        Array(maxSize).fill(0)
    );
    
    return arr.reduce((acc, row, i) => {
        row.reduce((_, val, j) => {
            acc[i][j] = val;
            return acc;
        }, acc);
        return acc;
    }, result);


}