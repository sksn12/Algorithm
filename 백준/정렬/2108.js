const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim();

input = input.split("\n").map((e) => parseInt(e));

// 수의 갯수
let N = input.shift();

// 1.산술 평균
let sum = input.reduce((acc, cur) => {
  return acc + cur;
});
let fisrt = Math.round(sum / N);

// 2.중앙값
let middle = parseInt(N / 2);
let sort_input = input.sort((a, b) => a - b);

let second = sort_input[middle];

// 3.최빈값
// reduce acc => 이전 값 cur => 현재 값
// reduce(()=>,{})   ,뒤에가 시작값 따라서 이전값인 acc가 이값을 지님 별도로 사용안하면 배열의 맨처음값을 갖음
// let x = {}; 빈객체에  x[0] = 2; 0이라는 키에 2 값을 넣어줌  console.log(x);
// (acc[cur] || 0) + 1; key를 acc로 갖는 값 cur가 값이 있으면 값을 가져와서 1을 더해주고 아니면 0+1

let box = input.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

let x = Object.keys(box);
let realBox = [];
for (let i = 0; i < x.length; i++) {
  let y = x[i];
  realBox.push({
    num: y,
    count: box[y],
  });
}

realBox = realBox.sort((a, b) => {
  return a.num - b.num;
});

console.log(realBox);

// 4.범위
let maximum = sort_input.pop();
let minimum = sort_input.shift();
let third = maximum - minimum;
