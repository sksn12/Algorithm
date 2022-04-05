function solution(n, lost, reserve) {
  let answer;
  const Len = lost.length;

  // 13,20테케 정렬 안한 lost와 reserve값을 줘서 정렬먼저 해야함
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // 여분의 체육복이 있지만 도난 당한 경우 먼저 제거
  for (let i = 0; i < Len; i++) {
    let tmp = lost.shift();
    let val = 0;
    for (let j = 0; j < reserve.length; j++) {
      if (tmp == reserve[j]) {
        reserve.splice(j, 1);
        val = 1;
        break;
      }
    }
    // reserve원소와 tmp값이 같은게 없을 시 다시 lost에 넣어줌
    if (val == 0) {
      lost.push(tmp);
    }
  }

  const Len2 = lost.length;
  for (let i = 0; i < Len2; i++) {
    let tmp = lost.shift();
    let val = 0;

    for (let j = 0; j < reserve.length; j++) {
      if (tmp - 1 == reserve[j] || tmp + 1 == reserve[j]) {
        reserve.splice(j, 1);
        val = 1;
        break;
      }
    }
    // reserve원소와 tmp값이 같은게 없을 시 다시 lost에 넣어줌
    if (val == 0) {
      lost.push(tmp);
    }
  }

  answer = n - lost.length;
  return answer;
}
// console.log(solution(5, [2, 4], [1, 2, 3, 5]));
// console.log(solution(5, [2, 4], [3]));
// console.log(solution(3, [1, 2], [2, 3]));
console.log(solution(9, [5, 6, 8, 1, 2], [2, 3, 1, 4, 8, 9]));
