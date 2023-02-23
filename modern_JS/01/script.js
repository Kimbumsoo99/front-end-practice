//alert();
//confirm();
//prompt("가나다(예/아니오)","예"); // default

//호이스팅
/*
var x = 10;
var sum = x + y;
var y = 20;
console.log(sum);
console.log(typeof sum);
*/

let obj = {
  title: "객체",
  date: Date.now(),
  num: 111,
};

console.log(obj["date"]);
console.log(obj.date);
console.log(obj.length); //length는 배열

// 심벌 symbol
//Symbol() 은 유일성을 보장한 자료형
let grade = Symbol("grade");
const member = {
  name: "Kim",
  id: 111,
};
member.grade = "AA";
member[grade] = "AA";
console.log(member);

//Number() 숫자 변환
//String() 문자 변환
//parseFloat() , parseInt()
//.toString()  매개변수 '2'면 2진수 문자열
//Boolean()

//섭씨화씨
const tempF = prompt("현재 온도는?(화씨)");
let tempC = ((parseFloat(tempF) - 32) / 1.8).toFixed(1);
//.toFixed(1) 은 소수점 조정
alert(`화씨온도 ${tempF}도는 섭씨 ${tempC}도 입니다.`);
