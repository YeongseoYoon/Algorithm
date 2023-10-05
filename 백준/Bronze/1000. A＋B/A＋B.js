const fs = require("fs");
const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin" ;
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const solution = (a, b) => {
  console.log(parseInt(a, 10) + parseInt(b, 10));
};

solution(input[0], input[1]);
