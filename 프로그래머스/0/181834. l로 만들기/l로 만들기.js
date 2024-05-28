function solution(myString) {
    return myString.split('').map((item) =>item<'l'? 'l': item).join('');
}