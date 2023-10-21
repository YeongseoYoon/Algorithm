const filePath = process.platform === "win32" ? "./example.txt" : "/dev/stdin";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [N, ...arr] = input;
arr = arr.map(Number);

let stack = [];
let answer = [];
let current = 1;

for (let i = 0; i < N; i++) {
  while (current <= arr[i]) {
    stack.push(current);
    answer.push("+");
    current++;
  }

  if (stack[stack.length - 1] === arr[i]) {
    stack.pop();
    answer.push("-");
  } else {
    console.log("NO");
    return;
  }
}

console.log(answer.join("\n"));
