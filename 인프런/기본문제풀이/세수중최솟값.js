function solution(a, b, c) {
  let answer;
  // 정렬
  //   let box = [a, b, c];
  //   box = box.sort((a, b) => a - b);
  //   answer = box[0];

  // 비교문 삼항연산자
  //   answer = a > b ? b : a;
  //   answer = answer > c ? c : answer;

  // if문
  if (a > b) {
    answer = b;
  } else {
    answer = a;
  }

  if (b > c) {
    answer = c;
  } else {
    answer = b;
  }

  return answer;
}

console.log(solution(2, 5, 1));
