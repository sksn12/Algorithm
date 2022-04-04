function solution(n, lost, reserve) {
  let answer;

  const preLostLen = lost.length;

  // 13,20테케 정렬 안한 lost와 reserve값을 줘서 정렬먼저 해야함
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // lost와 reserve의 배열에서 같은 원소가 있다면 그 원소 삭제
  for (let i = 0; i < preLostLen; i++) {
    let tmp = lost.shift();
    let val = 0;
    for (let j = 0; j < reserve.length; j++) {
      if (tmp == reserve[j]) {
        reserve.splice(j, 1);
        val = 1;
        break;
      }
    }
    if (val == 0) lost.push(tmp);
  }

  const NextLostLen = lost.length;

  for (let i = 0; i < NextLostLen; i++) {
    let tmp = lost.shift();
    let val = 0;
    for (let j = 0; j < reserve.length; j++) {
      if (tmp - 1 == reserve[j] || tmp + 1 == reserve[j]) {
        reserve.splice(j, 1);
        val = 1;
        break;
      }
    }
    if (val == 0) lost.push(tmp);
  }

  answer = n - lost.length;

  return answer;
}
console.log(solution(5, [2, 4], [1, 3, 5]));
// console.log(solution(5, [2, 4], [3]));
// console.log(solution(3, [1, 2], [2, 3]));
// console.log(solution(9, [5, 6, 8, 1, 2], [2, 3, 1, 4, 8, 9]));
