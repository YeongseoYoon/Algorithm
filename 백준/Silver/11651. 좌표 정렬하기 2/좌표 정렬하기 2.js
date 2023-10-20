const filePath = process.platform === "win32" ? "./example.txt" : "/dev/stdin";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const points = input.map((point) => point.split(" ").map(Number));

points.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let answer = "";
points.forEach((point) => {
  answer += point[0] + " " + point[1] + "\n";
});

console.log(answer);
