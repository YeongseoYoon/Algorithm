const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const solution = (R, S) => {
  if (S === undefined) {
    return;
  }
  return console.log(
    S.split("")
      .map((x) => x.repeat(R))
      .join("")
  );
};

for (let i = 0; i < input.length; i++) {
  solution(input[i].split(" ")[0], input[i].split(" ")[1]);
}
