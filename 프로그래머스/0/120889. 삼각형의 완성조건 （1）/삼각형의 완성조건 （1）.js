function solution(sides) {
    return Math.max(...sides) < (sides[0]+sides[1]+sides[2]) - Math.max(...sides) ? 1 : 2;
}