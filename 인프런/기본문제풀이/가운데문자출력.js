function solution(s) {
  let answer;
  let index;
  if (s.length % 2 !== 0) {
    index = Math.floor(s.length / 2);
    answer = s[index];
  } else {
    index = s.length / 2;
    answer = s[index - 1] + s[index];
  }
  return answer;
}
console.log(solution("good"));
