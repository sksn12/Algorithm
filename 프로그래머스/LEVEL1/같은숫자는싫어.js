function solution(arr) {
  // 효율성 down
  let answer = arr.filter((e, i) => {
    if (e !== arr[i + 1]) return true;
  });
  // 투포인터로 효율성 올리기
  let answer = [];
  let p1 = 0;
  for (let p2 = 1; p2 <= arr.length; p2++) {
    if (arr[p1] !== arr[p2]) {
      answer.push(arr[p1]);
      p1 = p2;
    }
  }
  // 근데 프로그래머스에서 효율성이 같게 나오네 왜징..?
  return answer;
}
