function solution(s) {
  var answer = "";
  answer = s.split("").sort((a, b) => {
    return b.charCodeAt(0) - a.charCodeAt(0);
  });

  return answer.join("");
}
console.log(solution("Zbcdefg"));
