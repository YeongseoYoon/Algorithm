const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [NM, numbers, ...ranges] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const array = numbers.split(" ").map(Number);
const prefixSum = [0];

for (let i = 0; i < array.length; i++) {
  prefixSum[i + 1] = prefixSum[i] + array[i];
}

const answer = ranges.map((range) => {
  const [i, j] = range.split(" ").map(Number);
  return prefixSum[j] - prefixSum[i - 1];
});

console.log(answer.join("\n"));
