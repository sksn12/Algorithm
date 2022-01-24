function solution(arr) {
  let answer = 1;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min < arr[i]) {
      min = arr[i];
      answer += 1;
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
