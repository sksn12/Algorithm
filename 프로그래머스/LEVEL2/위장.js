function solution(clothes) {
  let answer = 1;
  let map = new Map();
  let key_arr = [];
  let count_arr = [];

  // 값 분류
  for (let i = 0; i < clothes.length; i++) {
    if (map.get(clothes[i][1])) {
      map.get(clothes[i][1]).push(clothes[i][0]);
    } else {
      map.set(clothes[i][1], [clothes[i][0]]);
      key_arr.push(clothes[i][1]);
    }
  }

  // 해당 키 값의 몇개의 벨류가 있는지 분류
  for (let i = 0; i < key_arr.length; i++) {
    count_arr.push(map.get(key_arr[i]).length);
  }

  // 카운트
  for (let i = 0; i < count_arr.length; i++) {
    answer = (count_arr[i] + 1) * answer;
  }

  return answer - 1;
}
console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
