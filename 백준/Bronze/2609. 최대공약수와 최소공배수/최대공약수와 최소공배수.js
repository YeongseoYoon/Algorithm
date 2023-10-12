const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split(" ");

function GCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function LCM(a, b) {
  return (a * b) / GCD(a, b);
}

const gcd = GCD(input[0], input[1]);
const lcm = LCM(input[0], input[1]);

console.log(gcd + "\n" + lcm);
