function solution(n, lost, reserve) {
  let answer = 0;
  answer = n - lost.length;
  const first = reserve.length;

  for (let i = 0; i < reserve.length; i++) {
    let now_reerve = reserve.shift();
    let front = now_reerve + 1;
    let back = now_reerve - 1;

    for (let x = 0; x < lost.length; x++) {
      if (lost[x] == front) {
        let indexNum = lost.indexOf(lost[x]);
        reserve.splice(indexNum, 1);
      } else if (lost[x] == back) {
        let indexNum = lost.indexOf(lost[x]);
        reserve.splice(indexNum, 1);
      } else {
        reserve.push(now_reerve);
      }
    }
  }
  let end = first - reserve.length;

  answer += end;

  return answer;
}
console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
