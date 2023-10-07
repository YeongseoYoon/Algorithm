const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const solution = (quizString) => {
  let score = 0;
  let count = 0;
  for (let i = 0; i < quizString.length; i++) {
    if (quizString[i] == "O") {
      count++;
      score += count;
    } else count = 0;
  }
  return score;
};

for (let i = 1; i <= input[0]; i++) {
  console.log(solution(input[i]));
}
