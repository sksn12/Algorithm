// trim으로 앞뒤 공백을 없애야함!!!!! ㅅㅂ!!

const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim();
input = input
  .split("")
  .map((e) => parseInt(e))
  .sort((a, b) => b - a)
  .join("");

console.log(input.trim());
