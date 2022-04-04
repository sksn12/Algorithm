function solution(nums) {
  let answer = 0;
  let Len = nums.length;
  for (let i = 0; i < Len - 2; i++) {
    for (let j = i + 1; j < Len - 1; j++) {
      for (let k = j + 1; k < Len; k++) {
        if (def(nums[i] + nums[j] + nums[k])) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}
function def(sum) {
  for (let i = 2; i <= Math.sqrt(sum); i++) {
    if (sum % i === 0) return false;
  }
  return true;
}
console.log(solution([1, 2, 3, 4]));
