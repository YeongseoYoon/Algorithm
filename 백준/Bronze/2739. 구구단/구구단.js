const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split();

const solution = (input) => {
  let result = "";
  for (let i = 1; i <= 9; i++) {
    result += input + " * " + i + " = " + input * i + "\n";
  }
  return result;
};

console.log(solution(input));