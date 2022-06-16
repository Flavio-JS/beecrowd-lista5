var input = require("fs").readFileSync("1060/stdin", "utf8");
var lines = input.split("\n");

let numeros = lines.shift();

for (let i = 0; i < 5; i++) {
  numeros = [...numeros, lines.shift()];
}

let numerosPositivos = 0;

for (let i = 0; i <= 6; i++) {
  if (numeros[i] > 0) {
    numerosPositivos++;
  }
}

console.log(`${numerosPositivos} valores positivos`);
