const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split();

const solution = () => {
  console.log(
    "\\" +
      "    " +
      "/" +
      "\\" +
      "\n" +
      " " +
      ")" +
      "  " +
      "( ')" +
      "\n" +
      "(  /  )" +
      "\n" +
      " \\(__)|"
  );
};

solution();