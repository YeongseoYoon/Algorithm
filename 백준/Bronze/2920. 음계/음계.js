const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split();

const solution = (input) => {
  if (input === "1 2 3 4 5 6 7 8") {
    return "ascending";
  } else if (input === "8 7 6 5 4 3 2 1") {
    return "descending";
  } else {
    return "mixed";
  }
};

console.log(solution(input[0]));