const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const numbers = input.split(" ").map(Number);
numbers.sort((a, b) => a - b);

let total = 0;
for (let i = 0; i < parseInt(N, 10); i++) {
  total += numbers[i] * (N - i);
}

console.log(total);