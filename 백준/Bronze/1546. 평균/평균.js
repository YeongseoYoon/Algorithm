const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const solution = (input) => {
  const M = Math.max(...input);
  return (
    (100 * input.reduce((acc, curr) => (acc += curr))) / (input.length * M)
  );
};

console.log(solution(input[1].split(" ").map(Number)));
