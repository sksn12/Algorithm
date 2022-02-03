// 생 코딩
function solution(n, k) {
  let answer;
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);

  let location = 1;
  while (arr.length !== 1) {
    for (let i = 1; i < k; i++) {
      if (location >= arr.length) {
        location = 1;
      } else location += 1;
    }
    arr.splice(location - 1, 1);
    if (location >= arr.length) location = 1;
  }

  return answer;
}

console.log(solution(8, 4));

// 큐 사용
function solution(n, k) {
  let answer;
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);

  while (arr.length !== 1) {
    for (let i = 1; i < k; i++) {
      let now = arr.shift();
      arr.push(now);
    }
    arr.shift();
  }

  return (answer = arr[0]);
}

console.log(solution(8, 3));
