const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

input.shift();

const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
// 중복 제거
const uniqueValues = new Set(sorted);

console.log(Array.from(uniqueValues).join("\n"));
