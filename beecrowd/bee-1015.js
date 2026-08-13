var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const p1 = lines[0].split(" ").map((n) => Number(n));
const p2 = lines[1].split(" ").map((n) => Number(n));

const x1 = p1[0];
const y1 = p1[1];
const x2 = p2[0];
const y2 = p2[1];

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distance.toFixed(4));
