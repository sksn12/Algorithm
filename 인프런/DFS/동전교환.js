function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  let t1 = performance.now();
  function DFS(L, sum) {
    if (sum > m) return;
    if (L > answer) return; // 기존 갯수 보다 더 많은 동전이 필요로 하는 가지를 미리 제거
    if (sum === m) {
      answer = Math.min(L, answer);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0);
  let t2 = performance.now();
  console.log(t2 - t1);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
