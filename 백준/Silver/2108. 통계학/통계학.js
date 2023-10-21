const filePath = process.platform === "win32" ? "./example.txt" : "/dev/stdin";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const numbers = input.map(Number).sort((a, b) => a - b);

if (N === 1) {
  console.log(numbers[0] + "\n" + numbers[0] + "\n" + numbers[0] + "\n" + 0);
  return;
}

const sansul = Math.round(numbers.reduce((acc, curr) => (acc += curr), 0) / N);
const joonang = numbers[Math.floor(N / 2)];
const newMap = new Map();

let max = 0;
let choibin = 0;
for (let number of numbers) {
  const numberString = number.toString();
  if (newMap.has(numberString)) {
    max = Math.max(max, newMap.get(numberString) + 1);
    newMap.set(numberString, newMap.get(numberString) + 1);
  } else {
    newMap.set(numberString, 1);
  }
}

const maxArr = [];
for (let [key, val] of newMap) {
  if (val === max) maxArr.push(key);
}

choibin =
  maxArr.length === 0 ? numbers[1] : maxArr.length > 1 ? maxArr[1] : maxArr[0];

const range = Math.max(...numbers) - Math.min(...numbers);

console.log(sansul + "\n" + joonang + "\n" + choibin + "\n" + range);