// fs 경로를 /dev/stdin변경하고 제출 타입을 무조건 맞춰야함
const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString();
let num = parseInt(input);

let i = 1;
let line = 1;

// 각 대각선의 범위가 1씩 늘어남에 따라
// line === 해당범위( ex)7이면 4) , num === 해당 대각 라인의 실질적인 번호 위치
while (true) {
  if (num <= i) {
    break;
  }
  num = num - i;
  i += 1;
  line += 1;
}

// line이 짝수면 값이 앞자리는 up 뒷자리는 down, 홀수면 반대로
if (line % 2 === 0) {
  let i = 1;
  while (true) {
    if (num <= i) {
      console.log(`${i}/${line}`);
      break;
    }
    line -= 1;
    i++;
  }
} else {
  let i = 1;
  while (true) {
    if (num <= i) {
      console.log(`${line}/${i}`);
      break;
    }
    line -= 1;
    i++;
  }
}
