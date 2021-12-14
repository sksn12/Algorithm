// 맨처음값이 입력갯수였음...ㅅㅂ

const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim();
input = input.split("\n").map((e) => parseInt(e));
input.shift();

input = input.sort((a, b) => a - b);

console.log(input.join("\n").trim());
