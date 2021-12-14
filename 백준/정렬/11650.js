// map이나 for같은 반복문에 console.log넣으면 시간초과남 =>console.log가 용량이높음
// const fs = require("fs");
// let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

let input = ["7", "1 -1", "3 3", "1 -2", "1 1", "3 -2", "-2 1", "-3 1"];
const N = parseInt(input.shift());

input = input.map((e) => e.split(" ").map((e) => parseInt(e)));

input = input.sort((a, b) => {
  if (a[0] == b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});
let result = "";
input.forEach((e) => {
  result += `${e[0]} ${e[1]}\n`;
});
console.log(result);
