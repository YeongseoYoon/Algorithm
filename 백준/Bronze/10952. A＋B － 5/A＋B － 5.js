const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

input.map((element) => {
  if (
    parseInt(element.split(" ")[0], 10) === 0 &&
    parseInt(element.split(" ")[1], 10) === 0
  ) {
    return;
  }
  console.log(
    parseInt(element.split(" ")[0], 10) + parseInt(element.split(" ")[1], 10)
  );
});
