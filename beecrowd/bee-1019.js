var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const totalInSeconds = Number(lines[0]);

const hours = Math.floor(totalInSeconds / 3600);
const hoursInSeconds = hours * 3600
const remaining = totalInSeconds - hoursInSeconds;

const minutes = Math.floor(remaining / 60);
const minutesInSeconds = minutes * 60
const seconds = remaining - minutesInSeconds;

console.log(`${hours}:${minutes}:${seconds}`);
