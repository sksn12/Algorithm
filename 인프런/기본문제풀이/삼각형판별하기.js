// 내 풀이
function solution(a, b, c) {
  let answer = "YES";
  let box = [a, b, c];
  box = box.sort((a, b) => a - b);
  let max = box[2];
  if (max >= box[0] + box[1]) {
    answer = "NO";
  }

  return answer;
}

// 강의 풀이
function solution(a, b, c) {
  let answer = "YES",
    max;
  let tot = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) answer = "NO";
  return answer;
}

console.log(solution(13, 33, 17));
