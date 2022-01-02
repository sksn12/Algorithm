function solution(bridge_length, weight, truck_weights) {
  const queue = [];
  let time = 0;
  let now_weight = 0;

  let truck = truck_weights.shift();

  for (let i = 0; i < bridge_length; i++) {
    queue.push(i);
  }

  queue.push(truck);
  queue.shift();

  now_weight += truck;

  time += 1;

  while (now_weight > 0) {
    let next_truck = truck_weights.shift();

    if (now_weight + next_truck <= weight) {
      now_weight = now_weight + next_truck;
      queue.push(next_truck);
      queue.shift();
      time += 1;
    } else {
      queue.shift();
      queue.push(0);
      time += 1;
    }
  }
  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
