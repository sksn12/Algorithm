function solution(arr) {
  let answer = [];
  let i;
  let j;
  // 짝궁찾기
  for (i = arr.length - 1; i > 0; i--) {
    if (arr[i - 1] > arr[i]) break;
  }

  // 현수 찾기
  for (j = 0; j < arr.length; j++) {
    if (arr[j] > arr[i]) break;
  }

  answer.push(j + 1);
  answer.push(i + 1);
  return answer;
}

let arr = [122, 123, 125, 125, 128, 161, 167, 167, 167, 161, 170];
console.log(solution(arr));

// 강의 코드
function solution(arr) {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
