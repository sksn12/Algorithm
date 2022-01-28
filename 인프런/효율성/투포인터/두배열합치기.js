// 내 코드
function solution(arr1, arr2) {
  let answer = [];

  if (arr1.length > arr2.length) {
    let a = arr1;
    arr1 = arr2;
    arr2 = a;
  }

  while (arr1.length > 0) {
    let pointer = arr1.shift();
    let i = 0;
    while (true) {
      if (pointer <= arr2[i]) {
        arr2.splice(i, 0, pointer);
        break;
      }
      i += 1;
    }
  }
  return (answer = arr2);
}

// 강의 코드
function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

let b = [1, 3, 5];
let a = [2, 3, 6, 7, 9];
console.log(solution(a, b));
