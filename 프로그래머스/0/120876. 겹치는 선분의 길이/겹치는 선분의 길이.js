function solution(lines) {
    const points = new Array(201).fill(0);
    
    lines.forEach(([start, end]) => {
        for (let i = start + 100; i < end + 100; i++) {
            points[i]++;
        }
    });
    
    return points.filter(x => x > 1).length;
}