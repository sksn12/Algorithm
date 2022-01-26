//에라토스테네스의 체 공식에 따른 p값 구하기
// 내 코드
// 강의에서는 소수의 조건으로 해당 숫자의 제곱근까지만 for문을 돌려 만약 해당 숫자가 나눴을때 나머지가 0이면 소수의 조건을 만족하지 않는다
// 라는 조건으로 문제를 해결함
// 나는 에라토스테네스의 체 공식을 아예 만들어 해결햇는데 코드만 길어지고 효율이 별로 없어보임,,,
function psearch(n) {
  let p = 1;
  while (p * p <= n) {
    p += 1;
  }
  return p;
}

function solution(num) {
  let answer = [];
  for (let i = 0; i < num.length; i++) {
    let now = parseInt(num[i].toString().split("").reverse().join(""));
    if (now === 2) {
      answer.push(now);
    } else if (now === 1) {
      continue;
    } else {
      let p = psearch(now);
      let val = 0;
      for (let j = 2; j <= p; j++) {
        if (now % j === 0) {
          val += 1;
        }
      }
      if (val === 0) {
        answer.push(now);
      }
    }
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100, 5, 7, 6];
console.log(solution(arr));

// 강의코드
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
