function solution(dartResult) {
  let answer = 0;
  let point = 0;
  let sum = [];

  let cnt = -1;

  for (let i = 0; i < dartResult.length; i++) {
    if (parseInt(dartResult[i]) || parseInt(dartResult[i]) == 0) {
      if (parseInt(dartResult[i - 1]) == 1 && parseInt(dartResult[i]) == 0) {
        point = 10;
      } else {
        point = parseInt(dartResult[i]);
        cnt += 1;
      }
    } else {
      if (dartResult[i] == "S") {
        sum.push(point);
      } else if (dartResult[i] == "D") {
        sum.push(point * point);
      } else if (dartResult[i] == "T") {
        sum.push(point * point * point);
      } else if (dartResult[i] == "*") {
        if (cnt) {
          sum.splice(cnt, 1, sum[cnt] * 2);
          sum.splice(cnt - 1, 1, sum[cnt - 1] * 2);
        } else {
          sum.splice(cnt, 1, sum[cnt] * 2);
        }
      } else if (dartResult[i] == "#") {
        sum.splice(cnt, 1, sum[cnt] * -1);
      }
    }
  }
  console.log(sum);
  return (answer = sum.reduce((a, c) => a + c));
}
console.log(solution("1D2S#10S"));
