const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [NX, numbers] = input;
const [N, X] = NX.split(" ").map(Number);
const numberArray = numbers.split(" ").map(Number);

const newArray = numberArray.filter((number) => number < X);

console.log(newArray.join(" "));
