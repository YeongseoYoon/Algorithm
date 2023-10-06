const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const solution = (A, B) => {
  const sum = A + B;
  const difference = A - B;
  const product = A * B;
  const quotient = Math.floor(A / B);
  const remainder = A % B;
  console.log(
    sum +
      "\n" +
      difference +
      "\n" +
      product +
      "\n" +
      quotient +
      "\n" +
      remainder
  );
};

solution(parseInt(input[0], 10), parseInt(input[1], 10));
