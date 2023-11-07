const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [T, ...numbers] = input.map(Number);

let answer = "";

for (let i = 0; i < T; i++) {
  const dp = new Array(numbers[i] + 1).fill(1);
  for (let j = 4; j < dp.length; j++) {
    dp[j] = dp[j - 3] + dp[j - 2];
  }

  answer += dp[numbers[i]] + "\n";
}

console.log(answer);
