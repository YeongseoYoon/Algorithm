const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, B] = input.shift().split(" ").map(Number);
const arr = input.map((line) => line.split(" ").map(Number)).flat();

const min_height = Math.min(...arr);
const max_height = Math.max(...arr);

let min_time = Infinity;
let result_height = 0;

for (let i = min_height; i <= max_height; i++) {
  let time = 0;
  let inventory = B;

  //높이 맞추기
  for (let j = 0; j < arr.length; j++) {
    const block = arr[j];
    if (block < i) {
      time += i - block;
      inventory -= i - block;
    } else if (block > i) {
      time += 2 * (block - i);
      inventory += block - i;
    }
  }

  if (inventory >= 0 && time <= min_time) {
    min_time = time;
    result_height = i;
  }
}
console.log(min_time + " " + result_height);
