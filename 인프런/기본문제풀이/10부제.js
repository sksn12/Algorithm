function solution(day, arr) {
  let answer = 0;
  for (let i of arr) {
    if (i % 10 == day) {
      answer += 1;
    }
  }
  return answer;
}

arr = [3, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
