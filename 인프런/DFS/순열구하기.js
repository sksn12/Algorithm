function solution(m, arr) {
  let answer = [];
  let n = arr.length;
  let ch = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      if (ch.filter((e, i) => e === ch[i + 1]).length) return;
      else console.log(ch[0], ch[1]);
    } else {
      for (let i = 0; i < n; i++) {
        ch[L] = arr[i];
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}
let arr = [3, 6, 9];
console.log(solution(2, arr));
