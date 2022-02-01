function compare(now, hash) {
  for (let i of now) {
    if (!hash.has(i) || hash.get(i) == 0) return 0;
    else hash.set(i, hash.get(i) - 1);
  }
  return 1;
}

function solution(s, t) {
  let answer = 0;
  let p1 = 0;
  let p2 = t.length - 1;
  let hash = new Map();

  while (p2 <= s.length) {
    // 문자열 t의 각 문자 카운팅
    for (let i of t) {
      if (hash.has(i)) hash.set(i, hash.get(i) + 1);
      else hash.set(i, 1);
    }
    // 현재 확인하려는 문자열 가져오기
    let now = "";
    for (let i = p1; i <= p2; i++) {
      now += s[i];
    }
    // 문자열과 hash비교후 같으면 result에 1반환
    let result = compare(now, hash);

    if (result) answer += 1;

    p1 += 1;
    p2 += 1;

    // 계속 추가되는 hash를 초기화 후 다시 카운팅
    hash.clear();
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));

// 강의 코드
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}
