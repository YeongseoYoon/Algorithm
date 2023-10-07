const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const solution = (H, M) => {
  const hour = parseInt(H, 10);
  const minute = parseInt(M, 10);
  if (minute >= 45) {
    return hour + " " + (minute - 45);
  } else {
    if (hour === 0) {
      return 23 + " " + (minute + 60 - 45);
    } else {
      return hour - 1 + " " + (minute + 60 - 45);
    }
  }
};

console.log(solution(input[0], input[1]));
