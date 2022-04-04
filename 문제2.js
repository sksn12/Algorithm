function solution(k, m, names, amounts) {
  let answer = 0;
  let cnt = 1;
  for (let i = 0; i < names.length; i++) {
    let pre = names[i - 1];
    if (pre) {
      if (names[i].toUpperCase() == pre.toUpperCase()) {
        console.log(names[i]);
        cnt += 1;
      } else cnt = 1;
    }

    if (cnt >= k || amounts[i] >= m) answer += 1;
  }

  return answer;
}
console.log(
  solution(
    2,
    3451,
    ["abcd", "aBcd", "jsKIM", "rrr", "rrr"],
    [950, 1000, 1400, 4000, 10000]
  )
);
// console.log(
//   solution(
//     3,
//     50000,
//     [
//       "msLEE",
//       "jsKim",
//       "jsKIM",
//       "jsKiM",
//       "jskim",
//       "John",
//       "john",
//       "John",
//       "msLEE",
//       "msLEE",
//       "jsKIM",
//       "roy",
//     ],
//     [950, 52524, 1400, 6055, 10000, 4512, 512, 52000, 9000, 49000, 1400, 50000]
//   )
// );
