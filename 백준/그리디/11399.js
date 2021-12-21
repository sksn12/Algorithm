const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

let N = input.shift();

input = input[0]
  .split(" ")
  .map((e) => parseInt(e))
  .sort((a, b) => a - b);

let total = 0;

let time = [];
input.forEach((element) => {
  total += element;
  time.push(total);
});

console.log(time.reduce((a, c) => a + c));
