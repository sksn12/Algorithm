function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, c) => a + c);
  let overNum = sum - 100;

  for (let i = 0; i < answer.length; i++) {
    for (let x = i + 1; x < answer.length; x++) {
      if (answer[i] + answer[x] == overNum) {
        answer.splice(x, 1);
        answer.splice(i, 1);
      }
    }
  }

  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
