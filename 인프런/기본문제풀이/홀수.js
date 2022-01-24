function solution(arr) {
  let answer = [];
  let oddNum = [];
  let sum = 0;
  for (let i of arr) {
    if (i % 2 != 0) {
      oddNum.push(i);
    }
  }

  oddNum = oddNum.sort((a, b) => a - b);
  for (let i of oddNum) {
    sum += i;
  }

  answer.push(sum);
  answer.push(oddNum[0]);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
