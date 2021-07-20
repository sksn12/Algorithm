function solution(n) {
  let x = n + "";
  console.log(typeof x);
  return (n + "")
    .split("")
    .reverse()
    .map((v) => parseInt(v));
}
console.log(solution(12345));
