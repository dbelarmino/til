var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const distanceKm = Number(lines[0]);

const timeMinutes = distanceKm * 2;

console.log(timeMinutes + " minutos");
