function solution(priorities, location) {
  let now_location = location;
  let box = priorities;
  let cnt = 0;

  while (true) {
    let nowNum = box.shift();
    if (box.filter((e) => e > nowNum).length > 0) {
      box.push(nowNum);
      if (now_location == 0) {
        now_location = box.length - 1;
      } else {
        now_location -= 1;
      }
    } else {
      if (now_location == 0) {
        cnt++;
        return cnt;
      } else {
        now_location -= 1;
        cnt++;
      }
    }
  }
}

// 다른 풀이 some함수와 객체 이용에 유의깊게 보자!
// function solution(priorities, location) {
//   var list = priorities.map((t, i) => ({
//     my: i === location,
//     val: t,
//   }));
//   var count = 0;

//   while (true) {
//     var cur = list.splice(0, 1)[0];
//     //some 함수로 list중 cur의 val과 비교해서 하나라도 큰값이 있으면 if true
//     if (list.some((t) => t.val > cur.val)) {
//       list.push(cur);
//     } else {
//       count++;
//       if (cur.my) return count;
//     }
//   }
// }

console.log(solution([2, 1, 3, 2], 2));
// console.log(solution([1, 1, 9, 1, 1, 1], 0));
