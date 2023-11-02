const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let index = 0;
const T = Number(input[index++]);

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[index++].split(" ").map(Number);
  const field = Array.from(Array(N), () => Array(M).fill(0));
  for (let i = 0; i < K; i++) {
    const [X, Y] = input[index++].split(" ").map(Number);
    field[Y][X] = 1;
  }

  let count = 0;
  function dfs(y, x) {
    if (y < 0 || y >= N || x < 0 || x >= M) return;
    if (field[y][x] === 0) return;
    field[y][x] = 0;
    dfs(y + 1, x);
    dfs(y - 1, x);
    dfs(y, x + 1);
    dfs(y, x - 1);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (field[i][j] === 1) {
        count++;
        dfs(i, j);
      }
    }
  }

  console.log(count);
}
