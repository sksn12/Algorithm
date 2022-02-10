function solution(n) {
  let answer = "";
  function DFS(L) {
    if (L < 1) return;
    else {
      DFS(Math.floor(L / 2));
      if (L % 2 == 0) answer += 0;
      else answer += 1;
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));
