function solution(record) {
  let answer = [];

  for (let i = 0; i < record.length; i++) {
    let firstSantance = record[i].split(" ");
    if (firstSantance[0] == "Enter") {
      answer.push({
        behavior: "Enter",
        id: firstSantance[1],
        name: firstSantance[2],
      });
    } else if (firstSantance[0] == "Leave") {
      answer.push({
        behavior: "Leave",
        id: firstSantance[1],
      });
    } else if (firstSantance[0] == "Change") {
      answer.push({
        behavior: "change",
        id: firstSantance[1],
        name: firstSantance[2],
      });
    }
  }

  const x = answer.filter((e) => e.id);
  console.log(x);
  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
