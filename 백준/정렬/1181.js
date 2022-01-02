const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

const N = input.shift();

// a.localeCompare(b) => (출력 -1)문자열을 비교해서 앞에값이 더 먼저있으면 -1 아니면 1 같으면 0
input = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
// sort정렬 a-b해서 값이 음수면 a가 b 보다 앞으로 오게 정렬
console.log("im".localeCompare("it"));
console.log(input);
