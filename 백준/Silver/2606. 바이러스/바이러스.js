const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const M = +input.shift();

let count = 0;
const graph = [...new Array(N + 1)].map(() => []);
const visited = new Array(N + 1).fill(false);
visited[1] = true;

input.map((i) => {
  const [a, b] = i.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
});

function dfs(v) {
  visited[v] = true;
  count++;

  for (let i = 0; i < graph[v].length; i++) {
    const next = graph[v][i];
    if (!visited[next]) {
      dfs(next);
    }
  }
}

dfs(1);
console.log(count - 1);
