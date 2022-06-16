var input = require("fs").readFileSync("1061/stdin", "utf8");
var lines = input.split("\n");

let diaInicio = lines.shift();
diaInicio = diaInicio.split("Dia ");
diaInicio = parseInt(diaInicio[1]);
let horarioInicio = lines.shift();
let diaFim = lines.shift();
diaFim = diaFim.split("Dia ");
diaFim = parseInt(diaFim[1]);
let horarioFim = lines.shift();

let horarioInicioDividido = [];
horarioInicioDividido[0] = diaInicio * 86400;
let horarioFimDividido = [];
horarioFimDividido[0] = diaFim * 86400;
let duracaoEmSeg = 0;

let horarioDivisao = horarioInicio.split(" : ");
for (let i = 1; i < 4; i++) {
  horarioInicioDividido[i] = parseInt(horarioDivisao.shift());
}
horarioDivisao = horarioFim.split(" : ");
for (let i = 1; i < 4; i++) {
  horarioFimDividido[i] = parseInt(horarioDivisao.shift());
}

horarioInicioDividido[1] = horarioInicioDividido[1] * 3600;
horarioInicioDividido[2] = horarioInicioDividido[2] * 60;

horarioFimDividido[1] = horarioFimDividido[1] * 3600;
horarioFimDividido[2] = horarioFimDividido[2] * 60;

duracaoEmSeg =
  horarioFimDividido[0] -
  horarioInicioDividido[0] +
  horarioFimDividido[1] -
  horarioInicioDividido[1] +
  horarioFimDividido[2] -
  horarioInicioDividido[2] +
  horarioFimDividido[3] -
  horarioInicioDividido[3];

console.log(`${duracaoEmSeg / 86400 - (duracaoEmSeg % 86400) / 86400} dia(s)`);
console.log(
  `${
    (duracaoEmSeg % 86400) / 3600 - ((duracaoEmSeg % 86400) % 3600) / 3600
  } hora(s)`
);
console.log(
  `${
    ((duracaoEmSeg % 86400) % 3600) / 60 -
    (((duracaoEmSeg % 86400) % 3600) % 60) / 60
  } minuto(s)`
);
console.log(`${((duracaoEmSeg % 86400) % 3600) % 60} segundo(s)`);
