function solution(absolutes, signs) {
    return absolutes.reduce((sum, number, index) => 
        sum + (signs[index] ? number : -number), 0
    );
}