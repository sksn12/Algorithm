function solution(w, h) {
  let answer = w * h;
  let tmp = Math.min(w, h);
  while (true) {
    if (w % tmp === 0 && h % tmp === 0) {
      break;
    }
    tmp -= 1;
  }
  answer = answer - (w + h - tmp);
  return answer;
}

solution(8, 12);
