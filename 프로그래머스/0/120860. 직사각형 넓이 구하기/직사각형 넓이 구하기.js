function solution(dots) {
    const x = [...new Set(dots.map(p => p[0]))]
    const y = [...new Set(dots.map(p => p[1]))]
    return Math.abs((x[0] - x[1]) * (y[0] - y[1]))
}