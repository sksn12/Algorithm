function solution(citations) {
  citations.sort((a, b) => b - a);
  var i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}

console.log(solution([3, 0, 6, 1, 5]));
