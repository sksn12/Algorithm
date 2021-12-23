const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

let N = parseInt(input);
let queue = [];

for (let i = 1; i <= N; i++) {
  queue.push(i);
}

while (true) {
  if (queue.length == 1) {
    console.log(queue[0]);
    break;
  } else {
    queue.shift();
    let x = queue.shift();
    queue.push(x);
  }
}
