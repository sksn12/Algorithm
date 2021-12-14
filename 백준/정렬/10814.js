const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

const N = input.shift();

input = input.map((e) => {
  return e.split(" ");
});

input = input.sort((a, b) => {
  // 나이가 같으면 그대로 순서대로
  if (parseInt(a[0]) == parseInt(b[0])) {
    return 0;
  } // a[0]값이 더크면 1
  else if (parseInt(a[0]) > parseInt(b[0])) {
    return 1;
  } else if (parseInt(a[0]) < parseInt(b[0])) {
    return -1;
  }
});

for (let i = 0; i < input.length; i++) {
  console.log(`${input[i][0]} ${input[i][1]}`);
}
