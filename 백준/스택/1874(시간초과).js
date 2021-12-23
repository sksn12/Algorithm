let fs = require("fs");
let input = fs
  .readFileSync("./test.txt")
  .toString()
  .split("\n")
  .map((e) => parseInt(e));

const max = input.shift();
let cnt = 0;
let result = [];
const stack = [];
stack.push(cnt + 1);
let num = 1;

while (cnt < max) {
  if (input[cnt] == stack[stack.length - 1]) {
    stack.pop();
    result.push("-");
    cnt += 1;
  } else {
    if (num == max) {
      result = [];
      break;
    }
    num += 1;
    stack.push(num);
    result.push("+");
  }
}

if (result.length == 0) {
  console.log("NO");
} else {
  for (const x of result) {
    console.log(x);
  }
}

// 1. 스택값쌓기 +
// 2. 결과값과 비교 후 같으면 pop 하고 - 다르면 +1 후 push
// 3. while문을 가장 큰값 보다 커지기 전까지
