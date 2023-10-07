const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const solution = (H, W, N) => {
  const floor = N % H === 0 ? H : N % H;
  const roomOrder = Math.ceil(N / H);
  return floor * 100 + roomOrder;
};

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const [H, W, N] = input[i].split(" ").map(Number);
  console.log(solution(H, W, N));
}
