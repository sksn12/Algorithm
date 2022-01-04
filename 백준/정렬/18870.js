const fs = require("fs");
let input = fs
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .join(" ")
  .split(" ")
  .map((e) => parseInt(e));

input.shift();

input = input.sort((a, b) => a - b);
let newInput = new Set(input);
newInput = [...newInput];
