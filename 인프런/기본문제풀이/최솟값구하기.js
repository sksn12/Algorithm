function solution(arr) {
  let answer;
  answer = arr.sort((a, b) => a - b)[0];
  return answer;
}

// 강의에서 푼 것
function solution(arr) {
  // Number.MAX_SAFE_INTEGER; 큰  int값중 안전한 값
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
