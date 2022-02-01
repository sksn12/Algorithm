function solution(s) {
  let answer = "YES";
  let stack = [];
  for (let i of s) {
    if (i == "(") stack.push(i);
    else if (i == ")" && stack[stack.length - 1] == "(") stack.pop();
    else stack.push(i);
  }
  if (stack.length) answer = "NO";
  return answer;
}

let a = "(()(()))()";
console.log(solution(a));

function solution(s) {
  let answer = "YES";
  stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return answer;
}
