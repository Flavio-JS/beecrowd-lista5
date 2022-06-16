var input = require("fs").readFileSync("1047/stdin", "utf8");
var lines = input.split(" ");

let horas = [];
let minutos = [];
let horarioMinInicial = 0;
let horarioMinFinal = 0;
let duracaoEmMinutos = 0;
let duracaoH = 0;
let duracaoM = 0;

horas[0] = parseInt(lines.shift()) * 60;
minutos[0] = parseInt(lines.shift());
horas[1] = parseInt(lines.shift()) * 60;
minutos[1] = parseInt(lines.shift());

horarioMinInicial = horas[0] + minutos[0];
horarioMinFinal = horas[1] + minutos[1];

if (horarioMinInicial == horarioMinFinal) {
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else if (horarioMinInicial < horarioMinFinal) {
  duracaoH =
    (horarioMinFinal - horarioMinInicial) / 60 -
    ((horarioMinFinal - horarioMinInicial) % 60) / 60;
  duracaoM = (horarioMinFinal - horarioMinInicial) % 60;
  console.log(
    `O JOGO DUROU ${duracaoH.toFixed(0)} HORA(S) E ${duracaoM.toFixed(
      0
    )} MINUTO(S)`
  );
} else {
  for (
    horarioMinInicial = horarioMinInicial;
    horarioMinInicial < 1440;
    horarioMinInicial++
  ) {
    duracaoEmMinutos++;
  }
  duracaoEmMinutos = duracaoEmMinutos + horarioMinFinal;
  duracaoH = duracaoEmMinutos / 60 - (duracaoEmMinutos % 60) / 60;
  duracaoM = duracaoEmMinutos % 60;
  console.log(
    `O JOGO DUROU ${duracaoH.toFixed(0)} HORA(S) E ${duracaoM.toFixed(
      0
    )} MINUTO(S)`
  );
}
