var input = require("fs").readFileSync("1046/stdin", "utf8");
var lines = input.split(" ");

let horas = [];
let duracao = 0;
horas[0] = parseInt(lines.shift());
horas[1] = parseInt(lines.shift());

if (horas[0] == horas[1]) {
  console.log(`O JOGO DUROU 24 HORA(S)`);
} else if (horas[0] < horas[1]) {
  duracao = horas[1] - horas[0];
  console.log(`O JOGO DUROU ${duracao} HORA(S)`);
} else {
  for (horas[0] = horas[0]; horas[0] < 24; horas[0]++) {
    duracao++;
  }
  duracao = duracao + horas[1];
  console.log(`O JOGO DUROU ${duracao} HORA(S)`);
}
