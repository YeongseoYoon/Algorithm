const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
const [n, ...commands] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const stack = [];
const answer = [];

for (let i = 0; i < n; i++) {
  switch (commands[i].split(" ")[0]) {
    case "push":
      stack.push(commands[i].split(" ")[1]);
      break;
    case "pop":
      if (stack.length) answer.push(stack.pop());
      else answer.push(-1);
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      answer.push(stack.length ? 0 : 1);
      break;
    case "top":
      answer.push(stack.length ? stack[stack.length - 1] : -1);
      break;
    default:
  }
}

console.log(answer.join("\n"));