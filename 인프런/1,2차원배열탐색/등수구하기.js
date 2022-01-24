function solution(arr) {
  let answer = [];
  let rank = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        rank += 1;
      }
    }
    answer.push(rank);
    rank = 1;
  }
  return answer;
}

let arr = [89, 89, 92, 100, 76];
console.log(solution(arr));
