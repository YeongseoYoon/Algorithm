const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const solution = (input) => {
  let acc = 0;
  for (let i = 0; i < input.length; i++) {
    acc += Math.pow(input[i], 2);
  }

  return acc % 10;
};

console.log(solution(input));