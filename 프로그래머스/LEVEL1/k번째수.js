function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let tmp = array
      .splice(commands[i][0] - 1, commands[i][1] - 1)
      .sort((a, b) => a - b)[commands[i][2] - 1];
    console.log(tmp);
  }
  return answer;
}
console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
