const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const newArray = Array.from(input, (x) => parseInt(x, 10));
const max = Math.max(...newArray);
const maxIndex = newArray.indexOf(max) + 1;

console.log(max + "\n" + maxIndex);
