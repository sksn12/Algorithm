function solution(arr) {
  let answer = arr.reduce((a, c) => a + c) / arr.length;
  return answer;
}
