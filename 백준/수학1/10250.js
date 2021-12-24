const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

const N = parseInt(input.shift());

for (let i = 0; i < N; i++) {
  let nowInput = input[i].split(" ");
  let H = parseInt(nowInput[0]);
  let M = parseInt(nowInput[2]);

  let front = 0;
  let back = 1;
  for (let m = 1; m <= M; m++) {
    front += 1;
    if (front > H) {
      front = 1;
      back += 1;
    }
  }

  console.log(`${front}${back <= 9 ? "0" + back : back}`);
}
