var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const [totalDistance, fuelConsumed] = lines.map((n) => Number(n));

const average = totalDistance / fuelConsumed;

console.log(`${average.toFixed(3)} km/l`);
