const str = "Good morning!";
console.log(str.charAt(3));
console.log(str[5]);
// 문자열 위치 찾기
console.log(str.indexOf("mor"));
// 문자열 확인
str.startsWith("Goo");
str.startsWith("ood", 1);
str.endsWith("!");
str.includes("mor");

// 문자열 앞, 뒤 공백 제거 trim() , trimStart() trimEnd()
// 대소문자 toUpperCase() .toLowerCase()
// 부분 문자열 추출
str.substring(5);
str.substring(5, 8);
str.slice(5, 8);
str.slice(-5, 12); // slice는 음수도 줄 수 있음

// 문자열 쪼개기
str.split(" ");
str.split("");
