function solution(s) {
  let answer = "YES";
  let str = s.toLowerCase();
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  if (newStr !== str) {
    answer = "No";
  }
  return answer;
}

let str = "goo0G";
console.log(solution(str));
