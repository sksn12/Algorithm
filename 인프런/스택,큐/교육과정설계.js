function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  for (let i = 0; i < plan.length; i++) {
    if (queue.includes(plan[i])) {
      if (queue.shift() !== plan[i]) {
        answer = "No";
        break;
      }
    }
  }
  if (queue.length > 0) answer = "No";
  return answer;
}

let a = "CBA";
let b = "CBADGE";
console.log(solution(a, b));
