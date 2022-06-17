function solution(N, stages) {
  let answer = [];

  for (let i = 1; i <= N; i++) {
    let curr = stages.filter((e) => e === i).length;
    let reach = stages.filter((e) => e >= i).length;
    answer.push([i, curr / reach]);
  }

  answer.sort((a, b) => b[1] - a[1]);
  return answer.map((e) => e[0]);
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
