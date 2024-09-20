function solution(hp) {
    let count = 0;
    count += Math.floor(hp/5)+ Math.floor(hp%5/3) + hp%5%3
    return count;
}