function solution(priorities, location) {
  let p = 1;
  while (true) {
    let tmp = priorities.shift();
    if (priorities.filter((e) => e > tmp).length > 0) {
      priorities.push(tmp);

      if (location - 1 < 0) {
        location = priorities.length - 1;
      } else location -= 1;
    } else {
      if (location == 0) {
        return p;
      } else {
        p += 1;
        location -= 1;
      }
    }
  }
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
// console.log(solution([2, 1, 3, 2], 2));

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

// console.log(solution([1, 1, 9, 1, 1, 1], 0));
