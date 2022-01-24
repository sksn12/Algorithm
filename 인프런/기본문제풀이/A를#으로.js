function solution(string) {
  let answer;
  answer = string.replace(/A/g, "#");
  return answer;
}
console.log(solution("BANANA"));
