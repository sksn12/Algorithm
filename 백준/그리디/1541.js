const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("-");

input = input.map((e) => e.split("+"));

let index = [];
for (let x = 0; x < input.length; x++) {
  let box = 0;
  for (let y = 0; y < input[x].length; y++) {
    box += parseInt(input[x][y]);
  }
  index.push(box);
}

let sum = 0;
let b = 0;
sum = index.shift();

if (index.length > 0) {
  for (let i = 0; i < index.length; i++) {
    b += index[i];
  }
  console.log(sum - b);
} else {
  console.log(sum);
}
