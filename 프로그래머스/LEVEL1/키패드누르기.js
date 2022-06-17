function solution(numbers, hand) {
  let answer = "";
  let left = "*";
  let right = "#";
  const pos = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  for (let i = 0; i < numbers.length; i++) {
    const now_number = numbers[i];
    if (
      now_number === 1 ||
      now_number === 4 ||
      now_number === 7 ||
      now_number === "*"
    ) {
      answer += "L";
      left = now_number;
    } else if (
      now_number === 3 ||
      now_number === 6 ||
      now_number === 9 ||
      now_number === "#"
    ) {
      answer += "R";
      right = now_number;
    } else {
      console.log(pos[left][0]);
    }
  }
}
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
