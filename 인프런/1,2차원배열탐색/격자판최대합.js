// 내가 짠 코드 답은 같지만 코드 길이가 엄청 차이남..
function solution(arr) {
  let answer;

  let row = [];
  let colum = [];
  let diagonal = [];

  let row_sum = 0;
  let colum_sum = 0;
  let diagonal_left_sum = 0;
  let diagonal_right_sum = 0;
  let dig_loaction1 = 0;
  let dig_loaction2 = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        diagonal_left_sum += arr[i][j];
      }
      if (i == dig_loaction1 && j == dig_loaction2) {
        diagonal_right_sum += arr[i][j];
        dig_loaction1 += 1;
        dig_loaction2 -= 1;
      }
      colum_sum += arr[j][i];
      row_sum += arr[i][j];
    }
    colum.push(colum_sum);
    colum_sum = 0;
    row.push(row_sum);
    row_sum = 0;
  }
  diagonal.push(diagonal_left_sum);
  diagonal.push(diagonal_right_sum);

  row = row.sort((a, b) => a - b);
  colum = colum.sort((a, b) => a - b);
  diagonal = diagonal.sort((a, b) => a - b);

  let box = [
    row[row.length - 1],
    colum[colum.length - 1],
    diagonal[diagonal.length - 1],
  ].sort((a, b) => a - b);

  answer = box[box.length - 1];
  return answer;
}

// 답
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
