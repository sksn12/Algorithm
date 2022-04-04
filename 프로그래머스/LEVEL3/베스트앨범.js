function solution(genres, plays) {
  let answer = [];
  let map = new Map();
  let key_arr = [];
  let point_arr = [];

  // classic : [[0,500],[2,150],[3,800]] 같은 형식으로 map구성 && 키 값의 배열을 만들어 map value 찾기
  for (let i = 0; i < genres.length; i++) {
    if (map.get(genres[i])) {
      map.get(genres[i]).push([i, plays[i]]);
    } else {
      map.set(genres[i], [[i, plays[i]]]);
      key_arr.push(genres[i]);
    }
  }

  // 각 장르별 점수 합산 계산
  for (let i = 0; i < key_arr.length; i++) {
    let tmp = map.get(key_arr[i]);
    let point = 0;
    for (let j = 0; j < tmp.length; j++) {
      point += tmp[j][1];
    }
    point_arr.push([key_arr[i], point]);
  }

  // 점수가 큰 순으로 정렬
  point_arr.sort((a, b) => b[1] - a[1]);

  // 점수가 큰 장르 순서대로 2개씩 답에 추가
  for (let i = 0; i < point_arr.length; i++) {
    let key = point_arr[i][0];
    let tmp = map.get(key);
    // 만약 점수가 같으면 번호가 낮은순으로 정렬
    tmp.sort((a, b) => {
      if (b[1] - a[1] == 0) {
        return a[0] - b[0];
      } else {
        return b[1] - a[1];
      }
    });

    // 장르의 속한 곡이 하나라면 하나만 선택 아니면 2개
    if (tmp.length > 1) {
      answer.push(tmp[0][0]);
      answer.push(tmp[1][0]);
    } else {
      answer.push(tmp[0][0]);
    }
  }

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
