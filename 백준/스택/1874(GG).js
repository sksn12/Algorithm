let fs = require("fs");
let input = fs
  .readFileSync("./test.txt")
  .toString()
  .split("\n")
  .map((e) => parseInt(e));

let N = input.shift();

let stack = [];
let result = "";
let nowVal = 1;

for (let i = 0; i < N; i++) {
  let max = input[i];
  if (max < stack[stack.length - 1]) {
    console.log(max);
    console.log(stack[stack.length - 1]);
    // result = "No";
    break;
  } else {
    while (true) {
      if (max === stack[stack.length - 1]) {
        result += "-\n";
        stack.pop();
        break;
      } else {
        stack.push(nowVal);
        result += "+\n";
        nowVal += 1;
      }
    }
  }
}

console.log(result);
