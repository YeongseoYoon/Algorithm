const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const numbers = input.map(Number);

let answer = "";
const countWays = (n) => {
  const array = new Array(n + 1).fill(0);
  array[0] = 1;
  array[1] = 1;
  array[2] = 2;

  for (let i = 3; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2] + array[i - 3];
  }

  return array[n];
};

for (let i = 0; i < N; i++) {
  answer += countWays(numbers[i]) + "\n";
}
console.log(answer);
