var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

let valor = Number(lines[0]);
const cedulas = [100, 50, 20, 10, 5, 2, 1]

console.log(valor)
for (const ced of cedulas) {
  const qtd = Math.floor(valor / ced);
  valor %= ced;
  console.log(`${qtd} nota(s) de R$ ${ced},00`);
}