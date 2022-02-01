function solution(num) {
  let answer = 0;
  while (true) {
    if (num == 1) break;
    else if (answer == 500) {
      answer = -1;
      break;
    } else if (num % 2 == 0) num = num / 2;
    else num = num * 3 + 1;
    console.log(num);
    answer += 1;
  }
  return answer;
}
console.log(solution(6));
