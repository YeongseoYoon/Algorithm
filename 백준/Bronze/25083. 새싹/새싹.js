const fs = require("fs");
const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split();

console.log(
  "         ,r'\"7" +
    "\n" +
    "r`-_   ,'  ,/" +
    "\n" +
    ` \\. ". L_r'` +
    "\n" +
    "   `~\\/" +
    "\n" +
    "      |" +
    "\n" +
    "      |"
);
