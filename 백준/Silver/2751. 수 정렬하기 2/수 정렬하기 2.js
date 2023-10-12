const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
const [n, ...commands] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

console.log(
  commands
    .map(Number)
    .sort((a, b) => a - b)
    .join(" ")
);
