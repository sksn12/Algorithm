function solution(arr) {
  let answer = 0;
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1 && cnt == 0) {
      answer += 1;
      cnt += 1;
    } else if (arr[i] == 0) {
      cnt = 0;
    } else {
      cnt += 1;
      answer += cnt;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1];
console.log(solution(arr));
