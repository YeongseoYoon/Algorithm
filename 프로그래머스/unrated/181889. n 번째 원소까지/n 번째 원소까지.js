function solution(num_list, n) {
    
    return num_list.join('').substring(0,n).split('').map(x => parseInt(x));
}