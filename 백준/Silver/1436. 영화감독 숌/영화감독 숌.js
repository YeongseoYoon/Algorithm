const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

for (let i = 666; ; i++) {
  if ((i + "").indexOf("666") !== -1) {
    input--;
  }
  if (input === 0) {
    console.log(i);
    break;
  }
}
