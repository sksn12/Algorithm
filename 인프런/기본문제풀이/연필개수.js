function solution(n) {
  let answer;
  // Math.ceil 올림계산
  answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution(178));
