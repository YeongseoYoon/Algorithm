const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const solution = (multiply) => {
  const countArray = new Array(10).fill(0);

  const multiplyStr = multiply.toString();
  for (let i = 0; i < multiplyStr.length; i++) {
    const digit = parseInt(multiplyStr[i]);
    countArray[digit]++;
  }
  countArray.map((x) => console.log(x));
};

solution(
  parseInt(input[0], 10) * parseInt(input[1], 10) * parseInt(input[2], 10)
);
