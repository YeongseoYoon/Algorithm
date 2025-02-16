const DIRECTIONS = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0]
};

function isValid(x, y) {
    return x >= -5 && x <= 5 && y >= -5 && y <= 5;
}

function solution(dirs) {    
    let current = [0, 0];
    const visited = new Set();
    
    for(const dir of dirs) {
        const [dx, dy] = DIRECTIONS[dir];
        const next = [current[0] + dx, current[1] + dy];
        
        if(!isValid(next[0], next[1])) {
            continue;
        }
        
        const path1 = `${current[0]},${current[1]},${next[0]},${next[1]}`;
        const path2 = `${next[0]},${next[1]},${current[0]},${current[1]}`;
        
        visited.add(path1);
        visited.add(path2);
        
        current = next;
    }
    
    return visited.size / 2;
}