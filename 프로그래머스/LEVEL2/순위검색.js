function solution(info, query) {
  let answer = [];
  info = info.map((e) => e.split(" "));
  query = query.map((e) => e.split(" "));

  for (let i = 0; i < query.length; i++) {
    for (let j = 0; j < query[i].length; j++) {}
  }

  return answer;
}

console.log(
  solution(
    [
      "java backend junior pizza 150",
      "python frontend senior chicken 210",
      "python frontend senior chicken 150",
      "cpp backend senior pizza 260",
      "java backend junior chicken 80",
      "python backend senior chicken 50",
    ],
    [
      "java and backend and junior and pizza 100",
      "python and frontend and senior and chicken 200",
      "cpp and - and senior and pizza 250",
      "- and backend and senior and - 150",
      "- and - and - and chicken 100",
      "- and - and - and - 150",
    ]
  )
);
