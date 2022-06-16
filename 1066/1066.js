var input = require("fs").readFileSync("1066/stdin", "utf8");
var lines = input.split("\n");

let valores = [];
let pares = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

for (let i = 0; i < 5; i++) {
  valores[i] = parseInt(lines.shift());
  if (valores[i] % 2 == 0) {
    pares++;
  }
  if (valores[i] % 2 != 0) {
    impar++;
  }
  if (valores[i] > 0) {
    positivo++;
  }
  if (valores[i] < 0) {
    negativo++;
  }
}

console.log(`${pares} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${positivo} valor(es) positivo(s)`);
console.log(`${negativo} valor(es) negativo(s)`);
