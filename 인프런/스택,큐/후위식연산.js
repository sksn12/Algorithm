function solution(s) {
  let answer;
  let stack = [];
  for (let i of s) {
    if (!isNaN(i)) {
      stack.push(parseInt(i));
    } else {
      let r = stack.pop();
      let l = stack.pop();

      if (i == "+") stack.push(l + r);
      else if (i == "-") stack.push(l - r);
      else if (i == "/") stack.push(l / r);
      else if (i == "*") stack.push(l * r);
    }
  }
  return (answer = stack[0]);
}

let str = "352+*9-";
console.log(solution(str));
