function solution(c, n, w) {
  let answer = 0;
  let ch = Array.from({ length: n }, () => 0);
  function DFS(v) {
    if (v === n) {
      let sum = 0;
      for (let i = 0; i < n; i++) {
        if (ch[i] === 1) sum += w[i];
      }
      if (sum < c) answer = Math.max(sum, answer);
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(259, 5, [81, 58, 42, 33, 61]));
