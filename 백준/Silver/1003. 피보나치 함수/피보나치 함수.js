const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const numbers = input.map(Number);

let count_zero = 0;
let count_one = 0;

let answer = "";

let memo = {};

function fibonacci(n) {
  if (n in memo) {
    count_zero += memo[n][0];
    count_one += memo[n][1];
    return memo[n];
  }
  if (n === 0) {
    count_zero++;
    memo[n] = [1, 0];
    return [1, 0];
  } else if (n === 1) {
    count_one++;
    memo[n] = [0, 1];
    return [0, 1];
  } else {
    const left = fibonacci(n - 1);
    const right = fibonacci(n - 2);
    const result = [left[0] + right[0], left[1] + right[1]];
    memo[n] = result;
    return result;
  }
}

numbers.map((number) => {
  fibonacci(number);
  answer += count_zero + " " + count_one + "\n";
  count_one = 0;
  count_zero = 0;
});

console.log(answer);