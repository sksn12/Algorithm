function solution(n, m) {
  var answer = [];
  let max;
  let min = Math.max(n, m);
  // 최대 공약수
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i == 0 && m % i == 0) {
      max = i;
    }
  }
  // 최소 공배수
  while (true) {
    if (min % n == 0 && min % m == 0) {
      break;
    } else min += 1;
  }
  answer.push(max, min);
  return answer;
}
console.log(solution(3, 12));
