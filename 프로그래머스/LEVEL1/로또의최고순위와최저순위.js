function solution(lottos, win_nums) {
  let answer = [];
  let zeroNum = 0;
  let sameNum = 0;
  const n = lottos.length;
  const Lank = [
    [6, 1],
    [5, 2],
    [4, 3],
    [3, 4],
    [2, 5],
    [1, 6],
    [0, 6],
  ];

  for (let i = 0; i < n; i++) {
    let tmp = lottos[i];
    for (let j = 0; j < n; j++) {
      if (tmp === 0) {
        zeroNum += 1;
        break;
      }
      if (tmp === win_nums[j]) {
        sameNum += 1;
        break;
      }
    }
  }

  let max = zeroNum + sameNum;

  for (let i = 0; i < Lank.length; i++) {
    if (max === Lank[i][0]) answer.push(Lank[i][1]);
    if (sameNum === Lank[i][0]) answer.push(Lank[i][1]);
  }

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
