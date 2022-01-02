let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().split("\n");

let input_dvice = [];
let stack = [];

for (let i = 0; i < input.length; i++) {
  let line = input[i].split("");
  for (const e of line) {
    if (e == "[" || e == "]" || e == "(" || e == ")") {
      input_dvice.push(e);
    }
  }

  for (const x of input_dvice) {
    if (x == "[") {
      stack.push("[");
    } else if (x == "(") {
      stack.push("(");
    } else if (x == "]") {
      if (stack.length == 0) {
        stack.push("]");
      } else {
        let back = stack.pop();
        if (back !== "[") {
          stack.push(back);
          stack.push("]");
        }
      }
    } else if (x == ")") {
      if (stack.length == 0) {
        stack.push(")");
      } else {
        let back = stack.pop();
        if (back !== "(") {
          stack.push(back);
          stack.push("(");
        }
      }
    }
  }
  if (stack.length == 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
  stack = [];
  input_dvice = [];
}
