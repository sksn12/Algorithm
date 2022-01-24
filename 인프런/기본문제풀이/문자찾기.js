function solution(s, t) {
  let answer = 0;
  for (let i of s) {
    if (i == t) answer += 1;
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
