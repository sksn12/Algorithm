// 내코드
function solution(m, arr) {
  let answer = 0;
  let p1 = 0;
  let p2 = 1;
  while (p1 < arr.length) {
    if (arr[p1] === m) {
      p1 += 1;
      p2 += 1;
      answer += 1;
    } else {
      let sum = 0;
      for (let i = p2; i >= p1; i--) {
        sum += arr[i];
      }
      if (sum === m) {
        answer += 1;
        p1 += 1;
        p2 = p1 + 1;
      } else if (sum < m) {
        p2 += 1;
      } else {
        p1 += 1;
        p2 = p1 + 1;
      }
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 3];
console.log(solution(6, a));

// 강의 코드
function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
