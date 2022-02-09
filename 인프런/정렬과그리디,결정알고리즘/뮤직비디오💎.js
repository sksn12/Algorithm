function sum(mid, arr) {
  let total = 0;
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    if (total >= mid) {
      cnt += 1;
      total = 0;
    } else {
      total += arr[i];
    }
  }
  return cnt;
}

function solution(m, songs) {
  let answer = 0;
  let Lt = Math.max(...songs);
  let Rt = songs.reduce((a, c) => a + c);

  while (Lt <= Rt) {
    let mid = Math.floor((Lt + Rt) / 2);
    let cnt = sum(mid, songs);

    if (cnt <= m) {
      answer = mid;
      Rt = mid - 1;
      mid = Math.floor((Lt + Rt) / 2);
    } else {
      Lt = mid + 1;
    }
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(4, arr));

function count(songs, capacity) {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else sum += x;
  }
  return cnt;
}

function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}
