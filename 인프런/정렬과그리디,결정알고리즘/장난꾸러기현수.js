function solution(arr) {
  let answer = [];
  const sortArr = arr.slice(); // 얇은 복사로 기존 arr배열을 바꾸지 않음
  sortArr.sort((a, b) => a - b);

  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] !== arr[i]) answer.push(i);
  }

  return answer;
}

let arr = [122, 123, 125, 125, 128, 161, 167, 167, 167, 161, 170];
console.log(solution(arr));

// 강의 코드
// function solution(arr) {
//   let answer = [];
//   let sortArr = arr.slice();
//   sortArr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== sortArr[i]) answer.push(i + 1);
//   }
//   return answer;
// }

// let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
// console.log(solution(arr));
