function solution(numbers) {
  var answer = numbers
    .map((c) => c + "")
    .sort((a, b) => {
      console.log(b + a);
      console.log(a + b);
      console.log("End");
      return b + a - (a + b);
    })
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([6, 10, 2]));
