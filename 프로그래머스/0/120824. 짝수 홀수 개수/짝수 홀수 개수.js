function solution(num_list) {
    return num_list.reduce((acc, num) => {
        acc[num % 2]++;
        return acc;
    },[0,0]);
}