function solution(str) {
  let answer = parseInt(str.replace(/\D/g, ""));
  return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
