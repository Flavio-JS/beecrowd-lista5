var input = require("fs").readFileSync("1051/stdin", "utf8");
var lines = input.split("\n");

let renda = parseFloat(lines.shift()) * 100;
let rendaDividida = [0, 0, 0, 0];
let impostoTotal = 0;

for (let i = 1; i <= 200000 && i <= renda; i++) {
  rendaDividida[0]++;
}
for (let i = 200001; i <= 300000 && i <= renda; i++) {
  rendaDividida[1]++;
}
impostoTotal = impostoTotal + (rendaDividida[1] / 100) * 0.08;
for (let i = 300001; i <= 450000 && i <= renda; i++) {
  rendaDividida[2]++;
}
impostoTotal = impostoTotal + (rendaDividida[2] / 100) * 0.18;
for (let i = 450001; i <= renda; i++) {
  rendaDividida[3]++;
}
impostoTotal = impostoTotal + (rendaDividida[3] / 100) * 0.28;

if (impostoTotal == 0) {
  console.log("Isento");
} else {
  console.log(`R$ ${impostoTotal.toFixed(2)}`);
}
