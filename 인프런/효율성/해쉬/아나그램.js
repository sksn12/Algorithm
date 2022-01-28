function solution(str1, str2) {
  let answer = "YES";
  let hash = new Map();
  let hash2 = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (hash.get(str1[i])) hash.set(str1[i], hash.get(str1[i]) + 1);
    else hash.set(str1[i], 1);
  }
  for (let i = 0; i < str2.length; i++) {
    if (hash2.get(str2[i])) hash2.set(str1[i], hash2.get(str2[i]) + 1);
    else hash2.set(str2[i], 1);
  }
  hash = [...hash];
  hash2 = [...hash2];
  console.log(hash);
  console.log(hash2);
  if (hash != hash2) answer = "No";
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
