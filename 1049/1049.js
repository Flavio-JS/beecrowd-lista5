var input = require("fs").readFileSync("1049/stdin", "utf8");
var lines = input.split("\n");

let caracteristicas = [];

for (let i = 0; i < 3; i++) {
  caracteristicas[i] = lines.shift();
}

if (caracteristicas[0] == "vertebrado") {
  if (caracteristicas[1] == "ave") {
    if (caracteristicas[2] == "carnivoro") {
      console.log("aguia");
    } else {
      console.log("pomba");
    }
  } else {
    if (caracteristicas[2] == "onivoro") {
      console.log("homem");
    } else {
      console.log("vaca");
    }
  }
} else {
  if (caracteristicas[1] == "inseto") {
    if (caracteristicas[2] == "hematofago") {
      console.log("pulga");
    } else {
      console.log("lagarta");
    }
  } else {
    if (caracteristicas[2] == "hematofago") {
      console.log("sanguessuga");
    } else {
      console.log("minhoca");
    }
  }
}
