function solution(s) {
  let answer;
  let hash = new Map();

  for (let i = 0; i < s.length; i++) {
    if (hash.get(s[i])) {
      hash.set(s[i], hash.get(s[i]) + 1);
    } else {
      hash.set(s[i], 1);
    }
  }

  answer = [...hash];
  answer = answer.sort((a, b) => a[1] - b[1])[4][0];
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));

// 강의코드
function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
