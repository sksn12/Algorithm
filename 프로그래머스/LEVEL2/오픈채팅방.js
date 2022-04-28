// function solution(record) {
//   let answer = [];
//   record = record.map((e) => e.split(" "));

//   for (let i = 0; i < record.length; i++) {
//     let UserId = record[i][1];
//     let ChangeName = record[i][2];

//     if (record[i][0] === "Enter") {
//       for (let j = 0; j < answer.length; j++) {
//         if (answer[j].id === UserId) answer[j].name = ChangeName;
//       }
//       answer.push({ InAndOut: "Enter", id: UserId, name: ChangeName });
//     } else if (record[i][0] === "Leave") {
//       let LeaveName = "";
//       for (let j = 0; j < answer.length; j++) {
//         if (answer[j].id === UserId) {
//           LeaveName = answer[j].name;
//           break;
//         }
//       }
//       answer.push({ InAndOut: "Leave", id: UserId, name: LeaveName });
//     } else {
//       for (let j = 0; j < answer.length; j++) {
//         if (answer[j].id === UserId) answer[j].name = ChangeName;
//       }
//     }
//   }

//   answer = answer.map((e) => {
//     if (e.InAndOut === "Enter") return `${e.name}님이 들어왔습니다.`;
//     else return `${e.name}님이 나갔습니다.`;
//   });
//   return answer;
// }

function solution(record) {
  let answer = [];
  let obj = {};

  for (let i = 0; i < record.length; i++) {
    const [state, uid, name] = record[i].split(" ");

    if (state == "Leave") {
      answer.push([uid, "님이 나갔습니다."]);
      continue;
    }
    if (state == "Enter") {
      answer.push([uid, "님이 들어왔습니다."]);
    }

    console.log(1);
    obj[uid] = name;
  }

  return answer.map((e) => obj[e[0]] + e[1]);
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
