function solution(array, n) {
    const newArray = [...array, n];
    newArray.sort((a, b) => a - b); 
    
    const index = newArray.indexOf(n);
    
   if (index === 0) return newArray[1];
    if (index === newArray.length - 1) return newArray[newArray.length - 2];

return Math.abs(newArray[index - 1] - n) > Math.abs(newArray[index + 1] - n) 
       ? newArray[index + 1] 
       : newArray[index - 1];
}