function solution(times) {
  let answer = 0;
  let T_L = [];
  for (let x of times) {
    T_L.push([x[0], "s"]);
    T_L.push([x[1], "e"]);
  }
  T_L.sort((a, b) => {
    if (a[0] == b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  console.log(T_L);
  let cnt = 0;
  for (let x of T_L) {
    if (x[1] == "s") {
      cnt += 1;
    } else {
      cnt -= 1;
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
