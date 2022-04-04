function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let tmp = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) tmp += 1;
    }
    if (tmp % 2 == 0) answer += i;
    else answer -= i;
  }
  return answer;
}
console.log(solution(13, 17));
