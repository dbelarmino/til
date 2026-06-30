var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const kmPorLitro = 12;
const [tempoGasto, velocidadeMedia] = lines.map((rt) => Number(rt));

const result = ((tempoGasto * velocidadeMedia) / kmPorLitro).toFixed(3);

console.log(result);
