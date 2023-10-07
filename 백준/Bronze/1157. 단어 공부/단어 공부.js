const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const countArray = Array(26).fill(0);

const solution = (str) => {
  str.split("").map((x) => countArray[x.charCodeAt() - 65]++);
  const max = Math.max(...countArray);
  const newArray = countArray.filter((x) => x === max);
  if (newArray.length > 1) {
    return "?";
  } else {
    return String.fromCharCode(countArray.indexOf(max) + 65);
  }
};

console.log(solution(input[0].toUpperCase()));
