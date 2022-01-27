function solution(arr1, arr2) {
  let answer = [];
  while (a.length > 0) {
    let pointer = arr1.shift();
    let i = 0;
    while (true) {
      if (pointer <= arr2[i]) {
        arr2.splice(i, 0, pointer);
        break;
      }
      i += 1;
    }
  }
  return (answer = arr2);
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
