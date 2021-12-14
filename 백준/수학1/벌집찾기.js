// fs 경로를 /dev/stdin변경하고 제출 타입을 무조건 맞춰야함
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = parseInt(input);

let count = 0;
let minimum = 1;
let maximum = 1;
let i = 1;

// 최대 범위가 (전의 최대범위 + 6의배수 + 1) 인 특성을 이용해 해당 범위를 찾아내줌
// count 값은 해당 범위가 1과 떨어진 거리 (답)
while (true) {
  if (minimum <= input && input <= maximum) {
    count += 1;
    console.log(count);
    return count;
  }
  minimum = maximum;
  maximum += 6 * i;
  count += 1;
  i++;
}
