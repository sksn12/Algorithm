function solution(lottos, win_nums) {
  let answer;
  let same_num = 0;
  let zero_cnt = 0;
  for (let i = 0; i < lottos.length; i++) {
    for (let w = 0; w < win_nums.length; w++) {
      if (lottos[i] == win_nums[w]) {
        same_num += 1;
      }
    }
  }

  for (const i of lottos) {
    if (i == 0) {
      zero_cnt += 1;
    }
  }

  let min = 7 - same_num >= 6 ? 6 : 7 - same_num;
  let max = min - zero_cnt < 1 ? 1 : min - zero_cnt;

  answer = [max, min];

  return answer;
}
console.log(6 % 7);
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
