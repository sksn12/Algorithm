function solution(N) {
  let Binary = "";

  while (N > 1) {
    if (N % 2 === 0) {
      Binary += "0";
      N = N / 2;
    } else {
      Binary += "1";
      N = parseInt(N / 2);
    }
  }

  if (N === 1) Binary += "1";
  else Binary += "0";

  Binary = Binary.split("").reverse();

  console.log(Binary);
}
console.log(solution(8));
