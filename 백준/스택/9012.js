let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().split("\n");

const caseCount = parseInt(input.shift());

for (let i = 0; i < caseCount; i++) {
  let result = "YES";
  let stack = [];
  for (let x = 0; x < input[i].length; x++) {
    if (input[i][x] === "(") {
      stack.push(1);
    } else {
      if (!stack.pop()) {
        result = "No";
        break;
      }
    }
  }

  if (stack.length !== 0) {
    result = "No";
  }
  console.log(result);
}
