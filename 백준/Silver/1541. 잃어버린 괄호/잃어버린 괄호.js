const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();

const array = input.split("-");

let result = array[0].split("+").reduce((acc, curr) => acc + parseInt(curr), 0);

for (let i = 1; i < array.length; i++) {
  const sum = array[i]
    .split("+")
    .reduce((acc, curr) => acc + parseInt(curr), 0);
  result -= sum;
}

console.log(result);
