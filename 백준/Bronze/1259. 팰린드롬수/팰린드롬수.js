const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const answer = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "0") {
    break;
  }
  const reversedString = input[i].trim().split("").reverse().join("");
  reversedString === input[i].trim() ? answer.push("yes") : answer.push("no");
}

console.log(answer.join("\n"));
