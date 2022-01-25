function solution(s) {
  let answer;
  answer = s.filter((e, i) => {
    if (s.indexOf(e) === i) return true;
  });
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
