const filePath = process.platform === "win32" ? "./example.txt" : "/dev/stdin";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
if (N === 0) {
  console.log("0");
  return;
}
const points = input.map(Number);
const exceptNumber = Math.round(N * 0.15);
points.sort((a, b) => a - b);
const newArray = points.slice(exceptNumber, N - exceptNumber);
const sum = newArray.reduce((acc, curr) => (acc += curr));

console.log(Math.round(sum / (N - exceptNumber * 2)));
