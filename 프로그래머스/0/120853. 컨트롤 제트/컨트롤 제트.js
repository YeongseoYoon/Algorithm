function solution(s) {
    const numbers = s.split(' ');
    let sum = 0;
    let stack = [];

    for (let item of numbers) {
        if (item === 'Z') {
            if (stack.length > 0) {
                sum -= stack.pop();
            }
        } else {
            const num = parseInt(item);
            sum += num;
            stack.push(num);
        }
    }

    return sum;
}