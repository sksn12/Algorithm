const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

let n = input.shift();

let distance = input[0].split(" ").map((e) => BigInt(e));

let city_price = input[1].split(" ").map((e) => BigInt(e));

let curPrice = city_price.shift();

let sum = BigInt(0);

for (let i = 0; i < city_price.length; i++) {
  sum += curPrice * distance[i];
  if (curPrice > city_price[i]) {
    curPrice = curPrice[i];
  }
}

console.log(sum.toString());
