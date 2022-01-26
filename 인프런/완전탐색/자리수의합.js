// 내 코드
// 답을 보고 내 코드가 부족 한점 (자릿 수의 합을 자동화 시킬 생각을 못함 && 강의 코드는 불필요한 합의 값을 날렷는데 나는 객체를 사용해서 모든 값을 가지고 있음)
function solution(n, arr) {
  let answer = { val: 0, sum: 0 };
  for (let i = 0; i < n; i++) {
    let now = arr[i];
    let frist = Math.floor(now / 100);
    let frist_rest = now % 100;
    let second = Math.floor(frist_rest / 10);
    let third = frist_rest % 10;
    let sum = frist + second + third;
    if (answer.sum < sum) {
      answer.val = now;
      answer.sum = sum;
    } else if (answer.sum == sum && answer.val < now) {
      answer.val = now;
      answer.sum = sum;
    }
    console.log(answer);
  }
  return answer.val;
}

let arr = [137, 460, 603, 40, 521, 128, 123];
console.log(solution(7, arr));

//강의코드
function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
