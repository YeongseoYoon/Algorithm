const fs = require("fs");
const filePath = process.platform === "win32" ? "./example.txt" : "/dev/stdin";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const answer = [];

const gwalho = {
  "(": ")",
  "[": "]",
};

for (let i = 0; i < input.length - 1; i++) {
  let isCompleted = false;
  const stack = [];
  let result = input[i].replace(/[^\(\)\[\]]/g, "");

  if (result.length === 0) {
    answer.push("yes");
    isCompleted = true;
    continue;
  }

  for (let j = 0; j < result.length; j++) {
    if (result[j] === "(" || result[j] === "[") {
      stack.push(result[j]);
    } else {
      if (stack.length === 0) {
        answer.push("no");
        isCompleted = true;
        break;
      }
      if (result[j] !== gwalho[stack[stack.length - 1]]) {
        answer.push("no");
        isCompleted = true;
        break;
      } else {
        stack.pop();
      }
    }
  }
  if (!isCompleted && stack.length !== 0) {
    answer.push("no");
  } else if (!isCompleted && stack.length === 0) {
    answer.push("yes");
  }
}

console.log(answer.join("\n"));
