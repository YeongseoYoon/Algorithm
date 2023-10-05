const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split();

let res = "";

const solution = (a) => {
  for (let i = 1; i <= a; i++) {
    for (j = 1; j <= i; j++) {
      res += "*";
    }
    res += "\n";
  }
  return res;
};

console.log(solution(input));