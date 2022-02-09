function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let cnt = 0;
  for (let x of arr) {
    if (x == target) break;
    else cnt += 1;
  }

  return (answer = cnt + 1);
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));

// 강의코드 : 이분검색 사용
function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = arr.length - 1;
  let mid;
  while (true) {
    mid = Math.floor((p2 + p1) / 2);
    console.log(mid);
    if (arr[mid] == target) break;
    else if (arr[mid] > target) p2 = mid - 1;
    else p1 = mid + 1;
  }
  answer = mid + 1;
  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
