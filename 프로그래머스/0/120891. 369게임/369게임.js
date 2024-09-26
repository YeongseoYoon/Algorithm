function solution(order) {
    return [...order.toString()].reduce((acc, curr) => 
        acc + (['3','6','9'].includes(curr) ? 1 : 0), 0);
}