const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input;

const d = new Array(N + 1).fill(1);

d[1] = 1;
d[2] = 3;

for (let i = 3; i <= N; i++) {
  d[i] = (d[i - 1] + d[i - 2] * 2) % 10007;
}

console.log(d[N]);
