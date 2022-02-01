function solution(str1, str2) {
  let answer = "YES";
  let hash = new Map();

  // str1의 각 문자 갯수 카운트
  for (let i = 0; i < str1.length; i++) {
    if (hash.get(str1[i])) hash.set(str1[i], hash.get(str1[i]) + 1);
    else hash.set(str1[i], 1);
  }
  // // 배열로 변환
  hash = [...hash];

  // // str2 문자열의 각 문자를 가져와 만약 hash의 문자와 같고 갯수가 0개 이상이면 갯수 -1 ,hash의 길이 만큼 돌았는데 문자가 없거나 갯수가 0개면 answer에 No
  for (let i = 0; i < str2.length; i++) {
    let now = str2[i];
    let cnt = 0;
    while (true) {
      if (cnt >= hash[0].length) {
        answer = "No";
        break;
      }
      if (now == hash[cnt][0] && hash[cnt][1] > 0) {
        hash[cnt].splice(1, 1, hash[cnt][1] - 1);
        break;
      } else {
        cnt += 1;
      }
    }
  }

  // 위에 조건부에서 No가 들어가지 않았을시 YES출력
  return answer;
}

let a = "abaCC";
let b = "Caaab";
console.log(solution(a, b));

// 강의 코드 : hash를 그대로 가져와 내장함수 has를 이용하여 조건 탐색
function solution(str1, str2) {
  let answer = "YES";
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}
