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
  let tmp = "";
  for (let i = 0; i < box.length; i++) {
    tmp += box[i];
    for (let j = 0; j < number.length; j++) {
      if (tmp == number[j].value || tmp == number[j].name) {
        answer += number[j].name;
        tmp = "";
        break;
      }
    }
  }
  return Number(answer);
}
console.log(solution("one4seveneight"));
