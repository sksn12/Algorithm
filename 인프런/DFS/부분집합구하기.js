function solution(n) {
  let answer = [];
  let checkBox = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 0; i < checkBox.length; i++) {
        if (checkBox[i]) tmp += i;
      }
      answer.push(tmp);
      return;
    } else {
      checkBox[v] = 1;
      DFS(v + 1);
      checkBox[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);

  return answer;
}

console.log(solution(3));
