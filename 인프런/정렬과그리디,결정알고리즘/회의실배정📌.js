function solution(meeting) {
  let answer = 0;

  // 가장 빨리 끝나는 순으로 정렬, 만약 끝나는 시간이 같으면 시작 시간 기준으로 정렬
  meeting.sort((a, b) => {
    if (a[1] == b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  // 끝나는 시간이 시작시간보다 작거나 같다면 +1 끝나는 시간 변경
  let et = 0;
  for (let x of meeting) {
    if (et <= x[0]) {
      answer += 1;
      et = x[1];
    }
  }

  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
