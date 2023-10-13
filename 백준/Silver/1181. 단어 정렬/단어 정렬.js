const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, ...words] = input;

const uniqueWords = [...new Set(words)];

const sortedWords = uniqueWords.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

console.log(sortedWords.join("\n"));
