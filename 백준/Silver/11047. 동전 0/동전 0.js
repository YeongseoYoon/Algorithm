const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, K] = input.shift().split(" ").map(Number);
const money = input.map(Number);

let answer = 0;
for (let i = N - 1; i >= 0; i--) {
  if (parseInt(K / money[i], 10) !== 0) {
    answer += parseInt(K / money[i], 10);
    K %= money[i];
  }
}

console.log(answer);
