function solution(name) {
  let answer = 0;
  let arr = Array.from({ length: name.length }, () => "A");

  for (let i = 0; i < name.length; i++) {
    let up = 0;
    let down = 0;

    let ANum = 65;
    let BackNum = 90;

    //위로 갔을 때 (다음)
    while (true) {
      if (tmp > BackNum) tmp;
      if (name.charCodeAt(i) === tmp) {
        break;
      } else {
        tmp += 1;
        up += 1;
      }
    }
  }

  return answer;
}
solution("JEROEN");

// if (name[center] === "A")조건문이 틀림 (처음 값 다음 A가 붙어있어야하나?)
