function solution(my_string, num1, num2) {
    const chars = [...my_string];
    
    [chars[num1], chars[num2]] = [chars[num2], chars[num1]];
    
    return chars.join('');
}