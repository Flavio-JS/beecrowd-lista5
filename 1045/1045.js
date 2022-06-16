var input = require("fs").readFileSync("1045/stdin", "utf8");
var lines = input.split(" ");

let lados = [];
let auxiliar = 0;

for (let i = 0; i < 3; i++) {
  lados[i] = lines.shift();
  lados[i] = parseFloat(lados[i]);
  if (lados[0] < lados[i]) {
    auxiliar = lados[0];
    lados[0] = lados[i];
    lados[i] = auxiliar;
  }
}

if (lados[0] >= lados[1] + lados[2]) {
  console.log(`NAO FORMA TRIANGULO`);
} else {
  if (lados[0] * lados[0] == lados[1] * lados[1] + lados[2] * lados[2]) {
    console.log(`TRIANGULO RETANGULO`);
  } else if (lados[0] * lados[0] > lados[1] * lados[1] + lados[2] * lados[2]) {
    console.log(`TRIANGULO OBTUSANGULO`);
  } else if (lados[0] * lados[0] < lados[1] * lados[1] + lados[2] * lados[2]) {
    console.log(`TRIANGULO ACUTANGULO`);
  }
  if (lados[0] == lados[1] && lados[0] == lados[2]) {
    console.log(`TRIANGULO EQUILATERO`);
  } else if (
    lados[0] == lados[1] ||
    lados[0] == lados[2] ||
    lados[1] == lados[2]
  ) {
    console.log(`TRIANGULO ISOSCELES`);
  }
}
