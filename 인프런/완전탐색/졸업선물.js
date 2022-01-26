// 내가 푼 코드 (정확히 맞는지는 모르겟음..)
function solution(m, product) {
  let answer = 0;
  let max = 0;

  for (let i = 0; i < product.length; i++) {
    let now = product[i][0] / 2;
    let priceBox = [];
    let price = m;
    let cnt = 0;
    for (let j = 0; j < product.length; j++) {
      if (i == j) {
        priceBox.push(now + product[i][1]);
      } else {
        priceBox.push(product[j][0] + product[j][1]);
      }
    }
    priceBox = priceBox.sort((a, b) => a - b);

    let z = 0;
    while (price >= priceBox[z]) {
      price = price - priceBox[z];
      z += 1;
      cnt += 1;
    }
    if (cnt > max) {
      max = cnt;
    }
  }
  return (answer = max);
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
