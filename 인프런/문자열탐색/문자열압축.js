function solution(s) {
  let answer = [];
  let cnt = 1;
  let str = s.split("");
  let len = str.length;
  let now;
  for (let i = 0; i < len; i++) {
    now = str.shift();
    if (str[0] == now) {
      cnt += 1;
    } else {
      answer.push(now);
      if (cnt > 1) {
        answer.push(cnt);
      }
      cnt = 1;
    }
  }
  answer = answer.map((e) => e.toString()).join("");
  return answer;
}

let str = "KKHSSSSSSSECCABB";
console.log(solution(str));
