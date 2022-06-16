var input = require("fs").readFileSync("1067/stdin", "utf8");
var lines = input.split("\n");

let x = lines.shift();
x = parseInt(x);

for (let i = 1; i <= x; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
