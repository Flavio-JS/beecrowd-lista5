var input = require("fs").readFileSync("1048/stdin", "utf8");
var lines = input.split(" ");

let salario = parseFloat(lines.shift());

if (salario <= 400) {
  console.log(`Novo salario: ${(salario * 1.15).toFixed(2)}`);
  console.log(`Reajuste ganho: ${(salario * 0.15).toFixed(2)}`);
  console.log(`Em percentual: 15 %`);
} else if (salario > 400 && salario <= 800) {
  console.log(`Novo salario: ${(salario * 1.12).toFixed(2)}`);
  console.log(`Reajuste ganho: ${(salario * 0.12).toFixed(2)}`);
  console.log(`Em percentual: 12 %`);
} else if (salario > 800 && salario <= 1200) {
  console.log(`Novo salario: ${(salario * 1.1).toFixed(2)}`);
  console.log(`Reajuste ganho: ${(salario * 0.1).toFixed(2)}`);
  console.log(`Em percentual: 10 %`);
} else if (salario > 1200 && salario <= 2000) {
  console.log(`Novo salario: ${(salario * 1.07).toFixed(2)}`);
  console.log(`Reajuste ganho: ${(salario * 0.07).toFixed(2)}`);
  console.log(`Em percentual: 7 %`);
} else {
  console.log(`Novo salario: ${(salario * 1.04).toFixed(2)}`);
  console.log(`Reajuste ganho: ${(salario * 0.04).toFixed(2)}`);
  console.log(`Em percentual: 4 %`);
}
