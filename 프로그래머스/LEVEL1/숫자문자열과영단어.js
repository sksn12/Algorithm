function solution(s) {
  let answer = "";
  let box = s.split("");
  const number = [
    { name: 0, value: "zero" },
    { name: 1, value: "one" },
    { name: 2, value: "two" },
    { name: 3, value: "three" },
    { name: 4, value: "four" },
    { name: 5, value: "five" },
    { name: 6, value: "six" },
    { name: 7, value: "seven" },
    { name: 8, value: "eight" },
    { name: 9, value: "nine" },
  ];
  const length = box.length;
  let val = "";
  for (let i = 0; i < length; i++) {
    if (parseInt(box[i])) {
      answer += box[i];
    } else {
      val += box[i];
      for (let x = 0; x < number.length; x++) {
        if (number[x].value == val) {
          answer += number[x].name;
          val = "";
        }
      }
    }
  }

  answer = Number(answer);
  return answer;
}
console.log(solution("zerozerozero"));
