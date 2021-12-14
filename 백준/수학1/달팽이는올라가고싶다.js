const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString();
input = input.split(" ").map((e) => parseInt(e));

const A = input[0]; //올라갈수있는높이
const B = input[1]; //내려가는높이
const V = input[2]; //나무의 높이

console.log(Math.ceil((V - B) / (A - B)));
