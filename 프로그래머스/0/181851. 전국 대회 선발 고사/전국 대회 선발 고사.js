function solution(rank, attendance) {
    const students = rank
        .map((rank, index) => ({ rank, index }))
        .filter((student, index) => attendance[index])
        .sort((a, b) => a.rank - b.rank); 
    
    const [a, b, c] = students.map(student => student.index);
    return 10000 * a + 100 * b + c;;
}