const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split();

const solution = () => {
  console.log(
    "|\\_/|" +
      "\n" +
      "|q p|   /}" +
      "\n" +
      '( 0 )"""\\' +
      "\n" +
      '|"^"`    |' +
      "\n" +
      "||_/=\\\\__|"
  );
};

solution();