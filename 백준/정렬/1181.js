const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

const N = input.shift();

input = input.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(input);
