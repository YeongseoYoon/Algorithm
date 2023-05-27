function solution(num_list) {
    const lastIndex = num_list.length-1;

    return num_list[lastIndex]>num_list[lastIndex-1]? [...num_list,num_list[lastIndex]-num_list[lastIndex-1]]:[...num_list,num_list[lastIndex]*2];
}