function solution(numbers) {
  let answer = 0;
  let t = 0;
  for (let i = 1; i < 10; i++) {
    t = 0;
    for (let x = 0; x < numbers.length; x++) {
      if (i == numbers[x]) {
        t = 1;
      }
    }
    if (t !== 1) {
      answer += i;
    }
  }
  return answer;
}

console.log(solution([5, 8, 4, 0, 6, 7, 9]));
