const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ");
const cards = input[1].split(" ").map(Number);

let closestSum = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum <= M && sum > closestSum) {
        closestSum = sum;
      }
    }
  }
}

console.log(closestSum);
