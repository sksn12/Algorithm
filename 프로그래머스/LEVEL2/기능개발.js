function solution(progresses, speeds) {
  let p1 = performance.now();
  let answer = [];
  let day = 1;
  let cnt = 0;
  progresses = progresses.map((e) => 100 - e);

  while (progresses[0]) {
    if (day * speeds[0] >= progresses[0]) {
      cnt += 1;
      progresses.shift();
      speeds.shift();
    } else {
      if (cnt > 0) {
        answer.push(cnt);
      }
      day += 1;
      cnt = 0;
    }
  }

  if (cnt > 0) {
    answer.push(cnt);
  }
  let p2 = performance.now();
  console.log(p2 - p1);
  return answer;
}
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
