const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
const [n, ...gwalhoArray] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (gwalho) => {
  let count = 0;
  if (gwalho.length % 2 === 1) {
    return "NO";
  }

  for (let i = 0; i < gwalho.length; i++) {
    if (gwalho[i] === "(") {
      count++;
    } else {
      count--;
    }

    if (count < 0) {
      return "NO";
    }
  }

  if (count === 0) {
    return "YES";
  } else {
    return "NO";
  }
};

for (let i = 0; i < gwalhoArray.length; i++) {
  console.log(solution(gwalhoArray[i]));
}
