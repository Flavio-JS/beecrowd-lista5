var input = require("fs").readFileSync("1065/stdin", "utf8");
var lines = input.split("\n");

let valores = [];
let pares = 0;

for (let i = 0; i < 5; i++) {
  valores[i] = parseInt(lines.shift());
  if (valores[i] % 2 == 0) {
    pares++;
  }
}

console.log(`${pares} valores pares`);
