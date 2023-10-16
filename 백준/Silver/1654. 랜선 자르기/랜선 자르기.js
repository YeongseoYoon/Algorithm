const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [K, N] = input.shift().split(" ");
const lines = input.map(Number).sort((a, b) => a - b);

let left = 1;
let right = Math.max(...lines);

while (left <= right) {
  let mid = parseInt((left + right) / 2);
  let count = lines.reduce((acc, curr) => {
    return acc + parseInt(curr / mid);
  }, 0);

  if (count >= +N) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);
