const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

let N = parseInt(input.shift());

input = input.map((e) => e.split(" "));

let stack = [];
let box = [];

for (let i = 0; i < N; i++) {
  switch (input[i][0]) {
    case "push":
      stack.push(parseInt(input[i][1]));
      break;
    case "top":
      if (stack.length == 0) {
        box.push(-1);
        break;
      } else {
        box.push(stack[stack.length - 1]);
        break;
        // stack[stack.length - 1]에 값이 있으면 그값이 들어가고 없으면 -1 or이여서 앞에 조건이 맞으면 앞에 부터 들어감
        // box.push(stack[stack.length - 1]||-1);
      }
    case "size":
      box.push(stack.length);
      break;
    case "empty":
      if (stack.length == 0) {
        box.push(1);
        break;
      } else {
        box.push(0);
        break;
      }
    // stack에 아무것도 없으면 undefined임으로 1추가
    //   box.push(stack[0] ? 0 : 1);

    case "pop":
      if (stack.length == 0) {
        box.push(-1);
        break;
      } else {
        box.push(stack.pop());
        break;
      }
    //   box.push(stack.pop() || -1)
  }
}

// box 출력을 이런식으로 햇는데 시간초과가 나서 밑에 처럼 바꾸니 통과됐다... 이유는 모르겠다...
// for (let i of box) {
//   console.log(i.toString());
// }
console.log(box.join("\n"));

// https://gurtn.tistory.com/67
// 위에 사이트에서는 나와 비슷한 방식으로 풀었지만 삼항연산자와 || 연산자를 이용해서 코드가 훨씬 깔끔해짐
