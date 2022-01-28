// 내 코드 k=3이라는 고정 값이라 생각하고 로직을 짰지만 만약 k값이 달라진다면 강의 코드와 같이 구현해야함
function solution(k, arr) {
  let answer = 0;
  let p1 = 0;
  for (let p2 = 2; p2 < arr.length; p2++) {
    let middle = p2 - p1;
    let sum = arr[p1++] + arr[middle] + arr[p2];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15, 100];
console.log(solution(3, a));

// 강의 코드
function solution(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
