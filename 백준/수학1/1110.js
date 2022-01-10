const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim();
let cnt = 1;

let first = input;
if (parseInt(first) < 10) {
  first = "0" + first;
}

let sum = (parseInt(first[0]) + parseInt(first[1])).toString();

let next = first[1] + sum;

while (true) {
  if (first === next) {
    console.log(cnt);
    break;
  } else {
    sum = (parseInt(next[0]) + parseInt(next[1])).toString();
    next = next[next.length - 1] + sum[sum.length - 1];
    cnt += 1;
  }
}
