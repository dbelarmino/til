var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const reguasDeTomadas = lines[0].split(' ').map(rt => Number(rt))
const amount = reguasDeTomadas.reduce((total, atual) => total + atual, 0) - 3

console.log(amount)