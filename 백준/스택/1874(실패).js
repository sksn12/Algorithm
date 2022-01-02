let fs = require("fs");
let input = fs
  .readFileSync("./test.txt")
  .toString()
  .split("\n")
  .map((e) => parseInt(e));

const max = input.shift();
let cnt = 0;
const stack = [];
stack.push(cnt + 1);
let num = 1;

while (cnt < max) {
  if (input[cnt] == stack[stack.length - 1]) {
    stack.pop();
    console.log("-");
    cnt += 1;
  } else {
    if (num == max) {
      console.log("no");
      break;
    }
    num += 1;
    stack.push(num);
    console.log("+");
  }
}

// 1. 스택값쌓기 +
// 2. 결과값과 비교 후 같으면 pop 하고 - 다르면 +1 후 push
// 3. while문을 가장 큰값 보다 커지기 전까지
