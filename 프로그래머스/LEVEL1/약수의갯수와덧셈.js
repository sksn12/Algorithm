function solution(left, right) {
  let answer = 0;
  const half = val(right);
  let box = [];
  let count = 0;
  for (let target = left; target <= right; target++) {
    for (let i = 1; i <= half; i++) {
      if (target % i === 0) {
        count++;
      }
    }
    box.push({ count: count + 1, target: target });
    count = 0;
  }
  for (let i = 0; i < box.length; i++) {
    if (box[i].count % 2 === 0) {
      answer += box[i].target;
    } else {
      answer -= box[i].target;
    }
  }
  return answer;
}

function val(right) {
  if (right % 2 === 0) {
    return right / 2;
  } else {
    return (right - 1) / 2;
  }
}
console.log(solution(1, 2));
