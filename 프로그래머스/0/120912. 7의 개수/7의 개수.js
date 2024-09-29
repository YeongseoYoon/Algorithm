function solution(array) {
    return array.reduce((acc, curr) => {
        const str = curr+'';
       for(let i = 0; i<str.length;i++){
           str[i] === '7' ? acc++ : acc;
       }
        return acc
    },0);
}