// 예외 처리 X
/*
console.log("시작");
add();
console.log("실행 중...");
console.log("끝");
*/

try {
  console.log("시작");
  add();
  console.log("실행 중...");
} catch (err) {
  console.error(`오류 발생 : ${err}`);
  console.error(`오류 발생 : ${err.name}`);
  console.error(`오류 발생 : ${err.message}`);
}
console.log("끝");

const json = '{"grade": 3, "age": 25}';

try {
  const user = JSON.parse(json);
  console.log(user);
  if (!user.name) {
    // throw "사용자 이름이 없습니다.";
    throw new Error("사용자 이름이 없습니다");
  }
} catch (err) {
  console.error(err);
}
