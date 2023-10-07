const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split();

const solution = (str) => {
  if (str === "") {
    return 0;
  }
  return str.split(" ").length;
};

console.log(solution(input[0]));
