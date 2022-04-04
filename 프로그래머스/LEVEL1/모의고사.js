// function solution(answers) {
//   let answer = [];

//   let tmp = "12345";
//   let tmp2 = "21232425";
//   let tmp3 = "3311224455";

//   let n1 = tmp.length / answers.length;
//   let n2 = tmp2.length / answers.length;
//   let n3 = tmp3.length / answers.length;

//   tmp = tmp.repeat(n1).split("");
//   tmp2 = tmp2.repeat(n2).split("");
//   tmp3 = tmp3.repeat(n3).split("");

//   let p1 = 0;
//   let p2 = 0;
//   let p3 = 0;

//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i] == tmp[i]) p1 += 1;
//     if (answers[i] == tmp2[i]) p2 += 1;
//     if (answers[i] == tmp3[i]) p3 += 1;
//   }

//   let max_tmp = Math.max(p1, p2, p3);

//   if (max_tmp == p1) answer.push(1);

//   if (max_tmp == p2) answer.push(2);

//   if (max_tmp == p3) answer.push(3);

//   return answer;
// }

// console.log(solution([1, 2, 3, 4, 5]));

function getPermutations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((v) => [v]);
  else {
    arr.forEach((fixed, index, origin) => {
      console.log(fixed);
      console.log(origin);
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      results.push(...attached);
    });
  }

  return results;
}

// 소수인지 판별
function isPrime(num) {
  // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
  // num > i
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
      return false;
    }
  }
  // 소수는 1보다 큰 정수임으로
  // 1보다 작으면 false를 리턴한다
  return num > 1;
}

function solution(numbers) {
  let answer = 0;

  const candiArr = [];

  const splitArr = numbers.split("");
  for (let i = 1; i < numbers.length + 1; i++) {
    candiArr.push(
      ...getPermutations(splitArr, i).map((v) => Number(v.join("")))
    );
  }

  const candiSet = new Set(candiArr);
  candiSet.forEach(function (v) {
    if (isPrime(v)) answer++;
  });

  return answer;
}

console.log(solution("17"));
