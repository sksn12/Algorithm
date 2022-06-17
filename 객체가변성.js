let obj = { id: 1, name: "youngman" };
let obj2 = obj;
// obj 와 obj2 변수는 같은 객체의 참조값을 가르키고 있다.
// 변수에 문자나 숫자가 오면 그 값 자체를 변수에 담지만 객체가 오면 해당 객체의 메모리 주소인 참조값이 온다
// 다른 변수에 객체의 참조값을 담은 변수를 넣어주면 참조 값이 다른 변수에 들어가 같은 주소값을 갖게된다.
// 즉, 참조값이 같으면 주소값이 같다.

let arrObj = [
  { id: 1, name: "youngman" },
  { id: 2, name: "youngman2" },
];
let arrObj2 = arrObj;
let arrObj3 = [...arrObj];
// arrObj와 arrObj2는 같은 참조값을 갖지만
// arrObj3는 다른 참조값을 갖는다 이유는 배열의 각 객체를 복사해서 새로운 배열에 넣어주기 때문(배열안에는 복사하기전 배열의 각 객체와 같은 주소값을 지님)
