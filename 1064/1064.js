var input = require("fs").readFileSync("1064/stdin", "utf8");
var lines = input.split("\n");

let valores = [];
let media = 0;
let aux = 0;

for (let i = 0; i < 6; i++) {
  valores[i] = parseFloat(lines.shift());
}

for (let i = 0; i < 6; i++) {
  if (valores[i] > 0) {
    aux++;
    media = media + valores[i];
  }
}

if (aux != 0) {
  console.log(`${aux} valores positivos\n${(media / aux).toFixed(1)}`);
} else {
  console.log(`0 valores positivos\n0.0`);
}
