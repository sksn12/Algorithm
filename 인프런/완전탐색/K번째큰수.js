// 내 코드 : 모든 경우의 수 를 구해서 중복 제거 후 뒤에서 3번째 값 출력
function solution(n, k, card) {
  let answer;
  let box = [];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    let pick1 = card[i];
    for (let j = 0; j < n; j++) {
      let pick2;
      if (i !== j) {
        pick2 = card[j];
      }
      for (let k = 0; k < n; k++) {
        if (i !== k && j !== k) {
          let pick3 = card[k];
          sum += pick1 + pick2 + pick3;
          box.push(sum);
          sum = 0;
        }
      }
    }
  }

  box = new Set(box);
  box = [...box];

  box = box.sort((a, b) => a - b);

  return (answer = box[box.length - 3]);
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

// 강의 코드
function solution(n, k, card) {
  let answer;
  let obj = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        obj.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let arr = Array.from(obj);
  arr.sort((a, b) => a - b);
  return (answer = arr[arr.length - 3]);
}
