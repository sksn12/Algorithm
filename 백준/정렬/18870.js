const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

const N = input.shift();

input = input[0].split(" ");

let box = [];
let count = 0;

input.forEach((e) => {
  box.push({
    Count: count,
    Num: e,
  });
  count += 1;
});

box.sort((a, b) => {
  if (a.Num > b.Num) {
    return 1;
  } else if (a.Num < b.Num) {
    return -1;
  } else {
    return 0;
  }
});

let result = [];

for (let i = 0; i < box.length; i++) {
  // if(box[])
  result.push(i);
}
