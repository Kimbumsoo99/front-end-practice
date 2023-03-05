// json은 "" 만 가능 '은 안됨 / 반드시 key는 "" 로 묶기
const student = { name: "도레미", major: "컴퓨터 공학", grade: 2 };
//객체를 json으로 변환
const json = JSON.stringify(student);
console.log(json);

// json을 object로 변환
const student_obj = JSON.parse(json);
console.log(student_obj);

// XML 관련
// XML 객체
const xhr = new XMLHttpRequest();
// open(방식, 자료 위치, 비동기 여부=true) 메서드 >> 서버로 자료 요청 (요청초기화)
// send(내용) 메서드 >> 요청 전송
xhr.open("GET", "student.json");
xhr.send();

// 요청 확인
xhr.onreadystatechange = function () {
  // 0 -> 1 -> 2 -> 3 -> 4
  if (xhr.readyState == 4) {
    console.log("요청 성공");
  }
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log("자료 가져옴");
  }
};
