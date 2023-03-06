function displayA() {
  console.log("A");
}
function displayB(callback) {
  setTimeout(() => {
    console.log("B");
    callback();
  }, 2000);
}
function displayC() {
  console.log("C");
}

//displayA();
//displayB(displayC);

//참고 사항
// 콜백 함수 기존부터 사용
// 프로미스 ES2015부터 도입
// async, await ES2017부터 도입

//익명 콜백
function displayLetter() {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("stop!");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}
displayLetter();
