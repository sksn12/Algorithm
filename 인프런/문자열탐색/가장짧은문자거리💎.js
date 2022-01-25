function solution(s, t) {
  let answer = [];
  let d = 0;
  let tracking = [];
  let BackTracking = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == t) {
      d = 0;
      tracking.push(d);
    } else {
      d += 1;
      tracking.push(d);
    }
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == t) {
      d = 0;
      BackTracking.push(d);
    } else {
      d += 1;
      BackTracking.push(d);
    }
  }
  BackTracking = BackTracking.reverse();

  for (let i = 0; i < tracking.length; i++) {
    let lowerNum =
      tracking[i] >= BackTracking[i] ? BackTracking[i] : tracking[i];
    answer.push(lowerNum);
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
