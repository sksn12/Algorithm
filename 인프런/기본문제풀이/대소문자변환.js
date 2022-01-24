function solution(s) {
  let answer = "";
  for (let i of s) {
    if (i == i.toUpperCase()) {
      answer += i.toLowerCase();
    } else if (i == i.toLowerCase()) {
      answer += i.toUpperCase();
    }
  }
  return answer;
}

console.log(solution("StuDY"));
