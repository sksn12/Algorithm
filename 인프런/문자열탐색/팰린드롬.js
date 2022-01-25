function solution(s) {
  let answer = "YES";
  let str = s.toLowerCase().replace(/\W/g, "").replace(/\d/g, "");
  if (str !== str.split("").reverse().join("")) {
    answer = "No";
  }
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
