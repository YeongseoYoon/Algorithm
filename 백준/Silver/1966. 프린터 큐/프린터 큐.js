const filePath = process.platform === "win32" ? "./example.txt" : "/dev/stdin";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [N, ...arr] = input;
arr = arr.map((item) => item.split(" ").map(Number));

let answer = "";

for (let i = 0; i < arr.length; i += 2) {
  let count = 0;
  const numbers = arr[i + 1];
  let location = arr[i][1];

  let max;
  while (true) {
    max = Math.max(...numbers);
    const number = numbers.shift();

    if (number === max) {
      count++;
      if (location === 0) {
        answer += count + "\n";
        break;
      }
    } else {
      numbers.push(number);
    }

    if (location === 0) {
      location = numbers.length - 1;
    } else {
      location--;
    }
  }
}

console.log(answer);