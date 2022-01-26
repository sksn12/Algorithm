// 해결 방법을 몰라 강의 설명듣고 구현만 해봄...
function solution(test) {
  let answer = 0;
  for (let i = 1; i <= test[0].length; i++) {
    for (let j = 1; j <= test[0].length; j++) {
      let pi;
      let pj;
      let cnt = 0;
      for (let k = 0; k < test.length; k++) {
        for (let m = 0; m < test[0].length; m++) {
          if (test[k][m] == i) {
            pi = test[k].indexOf(i);
          } else if (test[k][m] == j) {
            pj = test[k].indexOf(j);
          }
        }
        if (pi < pj) {
          cnt += 1;
        }
      }
      if (cnt == test.length) {
        answer += 1;
      }
      cnt = 0;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
  [1, 3, 4, 2],
];
console.log(solution(arr));
