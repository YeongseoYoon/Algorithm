function solution(dots) {
    const xValues = dots.map(dot => dot[0]);
    const xMax = Math.max(...xValues);
    const xMin = Math.min(...xValues);
    
    const yValues = dots.map(dot => dot[1]);
    const yMax = Math.max(...yValues);
    const yMin = Math.min(...yValues);
    
    const width = xMax - xMin;
    const height = yMax - yMin;
    
    return width * height;
}