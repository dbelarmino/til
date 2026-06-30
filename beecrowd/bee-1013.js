var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const valores = lines[0].split(' ').map(n => Number(n))

// const maior = Math.max(...valores)
const maior = valores.sort((a, b) => b - a)[0];

console.log(`${maior} eh o maior`)