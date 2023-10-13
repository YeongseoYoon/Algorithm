const filePath = process.platform === "win32" ? "./example.txt" : "./dev/stdin";
input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, ...point] = input;

const points = [];

for (let i = 0; i < parseInt(N, 10); i++) {
  const [x, y] = point[i].split(" ").map(Number);
  points.push({ x, y });
}

points.sort((a, b) => {
  if (a.x !== b.x) {
    return a.x - b.x;
  } else {
    return a.y - b.y;
  }
});

const formattedPoints = points.map((point) => `${point.x} ${point.y}`);
console.log(formattedPoints.join("\n"));