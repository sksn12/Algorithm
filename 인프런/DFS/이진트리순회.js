function solution(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v;
      DFS(2 * v);
      DFS(2 * v + 1);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
