const book = {
  title: "가나다",
  pages: 30,
};

// 호출 방식
// book.title
// book["title"]
// const 로 선언해도 객체 값은 변경 가능

const book2 = new Object();
book2.title = "Java";
book2.pages = 500;
book2.author = "김범수";
console.log(book2);

delete book2.author;
console.log(book2);
// 키는 두고 값을 제거 하고 싶을때는 undifined 사용

const book3 = new Object();
book3.title = "Java";
book3.pages = 500;
book3.author = "김범수";
book3.done = false;
book3.finish = function () {
  this.done === false ? console.log("읽는 중") : console.log("완독");
  // 화살표 함수에서 this는 window 객체를 가리킴. 그래서 this 못씀
};
console.log(book3);
book3.finish();
