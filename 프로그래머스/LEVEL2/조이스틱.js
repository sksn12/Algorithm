function solution(name) {
  let answer = 0;
  let arr = Array.from({ length: name.length }, () => "A");

  for (let i = 0; i < name.length; i++) {
    let up = 0;
    let down = 0;

    let A_tmp = 65;
    let Z_tmp = 90;

    //위로 갔을 때 (다음)
    while (true) {
      if (A_tmp > Z_tmp) A_tmp;
      if (name.charCodeAt(i) === A_tmp) {
        break;
      } else {
        A_tmp += 1;
        up += 1;
      }
    }
  }

  return answer;
}
solution("JEROEN");

// if (name[center] === "A")조건문이 틀림 (처음 값 다음 A가 붙어있어야하나?)
