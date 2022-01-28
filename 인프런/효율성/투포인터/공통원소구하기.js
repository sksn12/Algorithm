// 내가 쓴 코드 : 포인터를 하나만 씀
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let p = 0;
    while (p < arr2.length) {
      if (arr1[i] == arr2[p]) {
        answer.push(arr1[i]);
        break;
      }
      p += 1;
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}

// 강의 코드
function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1 += 1;
      p2 += 1;
    } else if (arr1[p1] < arr2[p2]) {
      p1 += 1;
    } else {
      p2 += 1;
    }
  }
  return answer;
}
let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
