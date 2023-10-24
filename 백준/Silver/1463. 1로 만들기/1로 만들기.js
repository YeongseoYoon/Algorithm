const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();

let i = 2;
const tree = [0, 0];

while (i <= input) {
  tree[i] = tree[i - 1] + 1;

  if (i % 3 === 0) {
    tree[i] = Math.min(tree[i], tree[i / 3] + 1);
  }
  if (i % 2 === 0) {
    tree[i] = Math.min(tree[i], tree[i / 2] + 1);
  }
  i++;
}

console.log(tree[input]);
