const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [NM, ...names] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = NM.split(" ").map(Number);

const newMap = new Map();

names.slice(0, N).map((name) => {
  newMap.set(name, 1);
});

const newArray = names.slice(N);

newArray.map((element) =>
  newMap.has(element) ? newMap.set(element, newMap.get(element) + 1) : ""
);

const result = [...newMap]
  .filter(([name, count]) => count >= 2)
  .map(([name]) => name)
  .sort();
console.log(result.length);
console.log(result.join("\n"));