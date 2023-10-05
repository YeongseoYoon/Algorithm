const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const solution = (a, b) => {
  return a === b ? "==" : a > b ? ">" : "<";
};

console.log(solution(parseInt(input[0], 10), parseInt(input[1], 10)));
