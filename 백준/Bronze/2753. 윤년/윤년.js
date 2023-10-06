const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split();

const solution = (input) => {
  if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
    return 1;
  }
  return 0;
};

console.log(solution(input));
