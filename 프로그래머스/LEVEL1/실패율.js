function solution(N, stages) {
  let answer = [];
  let count = 0;
  let total = stages.length;
  let box = [];
  // 스테이지
  for (let i = 1; i <= N; i++) {
    // 현재 스테이지에 멈춰 있는 사람을 구하기 위해 stages배열 순회
    for (let x = 0; x < stages.length; x++) {
      if (i === stages[x]) {
        count += 1;
      }
    }
    box.push({ stage: i, lost: count / total });
    total = total - count;
    count = 0;
  }
  box = box.sort((a, b) => {
    if (b.lost === a.lost) {
      return a.stage - b.stage;
    } else {
      return b.lost - a.lost;
    }
  });
  for (let i = 0; i < box.length; i++) {
    answer.push(box[i].stage);
  }
  return answer;
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
