// mid 값에 만족하는 dvd갯수 구하기
function cnt(songs, mid) {
  let sum = 0;
  let cnt = 1;
  for (let i = 0; i < songs.length; i++) {
    if (sum + songs[i] > mid) {
      cnt += 1;
      sum = songs[i];
    } else {
      sum += songs[i];
    }
  }
  console.log(cnt);
  return cnt;
}

function solution(m, songs) {
  let answer = 0;
  // 최소 용량
  let Lt = Math.max(...songs);
  // 최대 용량
  let Rt = songs.reduce((a, c) => a + c);

  // DvD갯수에 만족하는 최소 용량을 구하기 위해 모든 경우를 탐색
  while (Lt <= Rt) {
    // 이분탐색을 위한 중간값 정의
    let mid = Math.floor((Lt + Rt) / 2);

    // did갯수보다 작거나 같다면 조건을 만족하는 최소 용량임
    // 따라서 답에 일단 mid값을 넣고 조건을 만족하는 가장 좋은 답이 나올때 까지 계속 탐색
    if (cnt(songs, mid) <= m) {
      answer = mid;
      Rt = mid - 1;
    } else {
      Lt = mid + 1;
    }
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
