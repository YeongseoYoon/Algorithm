const fs = require("fs");
const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

console.log(input[0] * input[1]);
