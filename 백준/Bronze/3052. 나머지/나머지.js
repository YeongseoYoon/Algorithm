const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const newInputArray = input.map((x) => parseInt(x, 10));
const newCountArray = Array(42).fill(0);

const solution = (array) => {
  if (Math.max(parseInt(...array, 10)) > 42) {
    return array.length;
  }

  newInputArray.map((x) => newCountArray[x % 42]++);

  return newCountArray.filter((x) => x !== 0).length;
};

console.log(solution(newInputArray));
