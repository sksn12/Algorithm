function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);

  arr.forEach((e) => {
    let val = false;
    let i;
    for (i = 0; i < answer.length; i++) {
      if (answer[i] === e) {
        val = true;
        break;
      }
    }

    if (val) {
      answer.splice(i, 1);
      answer.unshift(e);
    } else {
      answer.pop();
      answer.unshift(e);
    }
  });

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

// 내장함수 사용
// function solution(size, arr) {
//   let answer = Array.from({ length: size }, () => 0);

//   arr.forEach((e) => {
//     //  겹치는 값이 있는지 있다면 위치 찾기
//     let i;
//     for (i = 0; i < answer.length; i++) {
//       if (answer[i] == e) break;
//     }

//     // 겹치는 값 x
//     if (i == answer.length) {
//       answer.pop();
//     } else {
//       answer.splice(i, 1);
//     }
//     answer.unshift(e);
//   });

//   return answer;
// }

// let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
// console.log(solution(5, arr));
