function solution(n) {
  let answer = "NO";
  let ch = Array.from({ length: n.length }, () => 0);
  function DFS(v) {
    if (v + 1 === n.length) {
      let sum1 = 0;
      let sum2 = 0;
      for (let i = 0; i < ch.length; i++) {
        if (ch[i] === 0) sum1 += ch[i];
        else sum2 += ch[i];
      }
      if (sum1 === sum2) return (answer = "Yes");
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

console.log(solution([1, 3, 5, 6, 7, 10]));
