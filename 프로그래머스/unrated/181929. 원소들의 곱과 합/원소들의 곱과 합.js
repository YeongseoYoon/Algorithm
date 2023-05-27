function solution(num_list) {
    return num_list.reduce((acc, curr)=> acc*curr)< num_list.reduce((acc, curr)=> acc+curr)**2 ? 1:0;
}