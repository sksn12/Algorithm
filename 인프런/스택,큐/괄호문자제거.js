function solution(s) {
  let answer;
  let stack = [];
  for (let i of s) {
    if (i == ")") {
      let now = stack.pop();
      while (true) {
        if (now == "(") break;
        now = stack.pop();
      }
    } else stack.push(i);
  }
  return (answer = stack.join(""));
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
