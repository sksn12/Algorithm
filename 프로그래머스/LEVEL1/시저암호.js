function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") answer += " ";
    else {
      let z = s.charCodeAt(i);
      let zn = z + n;

      if (96 < z && z < 123) {
        if (zn > 122) answer += String.fromCharCode(zn - 122 + 96);
        else answer += String.fromCharCode(zn);
      } else {
        if (zn > 90) answer += String.fromCharCode(zn - 90 + 64);
        else answer += String.fromCharCode(zn);
      }
    }
  }
  return answer;
}
console.log(solution("AB", 1));
