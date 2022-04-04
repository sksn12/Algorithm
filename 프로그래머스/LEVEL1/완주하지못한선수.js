function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();
  let i = 0;
  while (true) {
    if (participant[i] != completion[i]) {
      answer = participant[i];
      break;
    } else {
      i += 1;
    }
  }

  return answer;
}

function solution(participant, completion) {
  let map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i];
    let b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, z] of map) {
    if (z > 0) return k;
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
