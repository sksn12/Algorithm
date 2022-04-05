function solution(brown, yellow) {
  let sum = brown + yellow;

  // 될 수 있는 조합
  for (let i = 1; i <= brown / 2; i++) {
    for (let j = 1; j <= brown / 2; j++) {
      if (i * j === sum && i >= j) {
        if ((i - 2) * (j - 2) === yellow) {
          return [i, j];
        }
      }
    }
  }
}
console.log(solution(18, 6));
