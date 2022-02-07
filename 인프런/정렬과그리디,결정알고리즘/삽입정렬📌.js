function solution(arr) {
  let answer = arr;
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j; // j를 밖으로 뺀 이유 : break시점에서 j의 위치를 알기 위해
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
