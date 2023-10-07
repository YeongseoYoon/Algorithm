const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const solution = (arr) => {
  return Math.min(...arr) + " " + Math.max(...arr);
};

console.log(solution(input[1].split(" ")));
