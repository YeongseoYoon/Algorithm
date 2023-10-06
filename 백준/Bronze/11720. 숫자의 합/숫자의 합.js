const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
const [N, numbers] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

console.log(
  numbers.split("").reduce((acc, curr) => {
    return (parseInt(acc, 10) + parseInt(curr, 10)).toString();
  })
);
