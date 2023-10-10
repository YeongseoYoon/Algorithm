const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const solution = (N, numbers) => {
  let primeCount = 0;

  const isPrime = new Array(1001).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= 1000; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= 1000; j += i) {
        isPrime[j] = false;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    if (isPrime[numbers[i]]) {
      primeCount++;
    }
  }

  return primeCount;
};

console.log(solution(parseInt(input[0], 10), input[1].split(" ").map(Number)));
