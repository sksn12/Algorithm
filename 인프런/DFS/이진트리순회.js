function solution(n) {
  let answer = "";
  function DFS(v) {
    // if 트리가 멈추는 곳 else 트리가 뻗는곳
    if (v > 7) return;
    else {
      DFS(v * 2);

      DFS(v * 2 + 1);
      console.log(v);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
