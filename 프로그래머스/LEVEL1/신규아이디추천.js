function solution(new_id) {
  let answer;
  answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-\.\-\_]/g, "")
    .replace(/\.+/g, ".")
    .replace(/(^\.)|(\.$)/, "");

  if (answer.length == 0) {
    answer = "a";
  } else if (answer.length >= 16) {
    answer = answer.substr(0, 15).replace(/\.$/, "");
  }

  if (answer.length <= 2) {
    while (answer.length < 3) {
      let add = answer[answer.length - 1];
      answer = answer.concat(add);
    }
  }

  return answer;
}

console.log(solution("z-+.^."));
