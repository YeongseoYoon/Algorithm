const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const solution = (a, b, c) => {
  const value = [a, b, c].sort((a, b) => a - b);
  if (a === 0 && b === 0 && c === 0) {
    return "";
  }
  return value[2] ** 2 === value[1] ** 2 + value[0] ** 2 ? "right" : "wrong";
};

for (let i = 0; i < input.length; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  console.log(solution(a, b, c));
}
