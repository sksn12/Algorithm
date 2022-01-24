function solution(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;
  for (let i of s) {
    if (i.length > max) {
      max = i.length;
      answer = i;
    }
  }

  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
