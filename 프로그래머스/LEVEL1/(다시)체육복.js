function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let reserveFilter;
  // console.log(solution(3, [1, 2], [2, 3]));
  reserveFilter = reserve.filter((e) => {
    for (const num of lost) {
      if (num == e) {
        return false;
      }
      return true;
    }
  });
  console.log(reserveFilter);
  let x = lost.filter((e) => {
    for (const num of reserveFilter) {
      let front = e - 1;
      let back = e + 1;
      if (front == num) {
        let indexNum = reserveFilter.indexOf(num);
        reserveFilter.splice(indexNum, 1);
        return e;
      } else if (back == num) {
        let indexNum = reserveFilter.indexOf(num);
        reserveFilter.splice(indexNum, 1);
        return e;
      }
    }
  });

  answer = answer + x.length;
  return answer;
}
console.log(solution(5, [2, 4], [1, 2, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [1, 2], [2, 3]));
console.log(solution(9, [5, 6, 8, 1, 2], [2, 3, 1, 4, 8, 9]));
