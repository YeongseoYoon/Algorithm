const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split();

const solution = (input) => {
  if (input >= 90) {
    console.log("A");
  } else if (input >= 80) {
    console.log("B");
  } else if (input >= 70) {
    console.log("C");
  } else if (input >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
};

solution(input);