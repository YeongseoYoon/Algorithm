function solution(keyinput, board) {
    let [x, y] = [0, 0];  
    const [maxX, maxY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)]; 

    const moves = {
        'up': [0, 1],
        'down': [0, -1],
        'left': [-1, 0],
        'right': [1, 0]
    };

    for (const key of keyinput) {
        if (moves[key]) {
            const [dx, dy] = moves[key];
            const newX = x + dx;
            const newY = y + dy;

            if (Math.abs(newX) <= maxX && Math.abs(newY) <= maxY) {
                [x, y] = [newX, newY];
            }
        }
    }

    return [x, y];
}