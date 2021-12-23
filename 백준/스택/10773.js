const fs = require("fs");
let input = fs
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => parseInt(e));
let N = input.shift();

let result = [];

for (let i = 0; i < N; i++) {
  if (input[i] == 0) {
    result.pop();
  } else {
    result.push(input[i]);
  }
}

result = result.length ? result.reduce((a, b) => a + b) : 0;
console.log(result);
