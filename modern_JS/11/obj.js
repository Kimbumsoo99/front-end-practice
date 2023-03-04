// Map , Set

// Map 은 key 값이 모든 자료형 가능, 순서대로 접근 가능
const myCup = new Map([
  ["color", "white"],
  ["haveHandle", true],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);
myCup.set("이렇게", "사용한다");
console.log(myCup);

// Set은 키 없이 여러 개의 값을 모아 놓은 것으로, 중복이 되지 않음 (배열과 비슷하지만 다름)
const numSet2 = new Set().add("one").add("two").add("three");
numSet2.add("one");
console.log(numSet2);
console.log(numSet2.entries());
numSet2.clear();
console.log(numSet2);

// 이터러블 객체 >> 순서대로 처리 하는 객체
// 제너레이터 함수 >> 함수 연결 function* 함수명 (){ handlefunction} return이 아닌 function이 동작
