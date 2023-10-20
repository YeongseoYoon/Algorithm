const filePath = process.platform === "win32" ? "./example.txt" : "/dev/stdin";
const input = require("fs").readFileSync(filePath).toString().trim();
const N = parseInt(input);

let count = 0;
let divisor = 5;

while (divisor <= N) {
  count += Math.floor(N / divisor);
  divisor *= 5;
}

console.log(count);
