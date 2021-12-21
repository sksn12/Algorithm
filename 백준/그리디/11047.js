const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

let money = parseInt(input.shift().split(" ")[1]);

input = input.map((e) => parseInt(e)).sort((a, b) => b - a);

let cnt = 0;

input.forEach((e) => {
  if (money >= e) {
    cnt += parseInt(money / e);
    money = money % e;
  }
});

console.log(cnt);
