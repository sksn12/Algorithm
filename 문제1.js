function solution(research, n, k) {
  let answer = "";
  let best_search = -1;
  let issue_check = Array.from({ length: 26 }, () => 0);
  let max = -1;

  // 연속된 n일의 검색어를 대입
  for (let i = 0; i <= research.length - n; i++) {
    let days = new Array(n);
    let check = Array.from(Array(n), () => Array(26).fill(0));
    console.log(check);
    for (let j = 0; j < n; j++) {
      days[j] = research[i + j];
    }

    // 각 날마다 check
    for (let d = 0; d < days.length; d++) {
      let day = days[d];
      // 날마다 검색된 검색어를 체크
      for (let p = 0; p < day.length; p++) {
        check[d][day.charCodeAt(p) - 97]++;
      }
    }

    // 알파벳 전부 탐색
    // 단 사전순으로 저장해야 하므로 뒤에서 부터
    L: for (let apla = 25; apla >= 0; apla--) {
      // n일 동안 검색한 수
      let total = 0;
      // 각 날마다
      for (let n_day = 0; n_day < check.length; n_day++) {
        // 해당 알파벳이 해당 날에 k번 이상 검색 되었는지 확인
        if (check[n_day][apla] >= k) {
          total += check[n_day][apla];
        }
        // 하루라도 k번 이상 검색되지 않았다면 다음 알파벳으로
        else {
          continue L;
        }
      }
      // n일 동안 검색한 값이 2*n*k 값보다 크거나 같으면 저장
      if (total >= 2 * n * k) {
        issue_check[apla]++;
      }
    }
  }

  for (let x = issue_check.length - 1; x >= 0; x--) {
    if (max <= issue_check[x] && issue_check[x] !== 0) {
      max = issue_check[x];
      best_search = x;
    }
  }

  console.log(best_search);
  if (best_search == -1) {
    answer = "None";
  } else {
    answer = String.fromCharCode(best_search + 97);
  }
  return answer;
}

console.log(solution(["xy", "xy"], 1, 1));
