//배열 만들기
let season = [];
season[0] = "spring";
season[1] = "summer";
console.log(season);

//리터럴 표기법
let pets = ["dog", "cat", "parrot"];
console.log(pets);
//Array객체
let fruits = new Array("사과", "복숭아", "포도");
fruits[4] = "자두";
console.log(fruits);
console.log(fruits[3]);

fruits.forEach((fruit, index, array) => {
  //첫번째는 값, 두번째는 index, 3번째는 배열 그 자체
  console.log(fruit, index);
});
//forEach는 break나 continue 사용안함 다 돌음

//배열 합치기 메서드 .concat(붙일값,붙일값, ...)
// 이때 전개 연산자 ...a 로도 붙일 수 있음

fruits.reverse();
fruits.sort(); //작은 -> 큰
let values = [5, 20, 3, 11, 4, 15];
console.log(values.sort());
// 11 15 20 3 4 5 가 나옴
// 문자열로 판단해서 그럼
// sort 옵션을 줘야함

console.log(
  values.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === 0) return 0;
  })
);
// 또는
console.log(
  values.sort(function (a, b) {
    return a - b;
  })
);

// 배열 요소 추가 및 제거 (끝)
// .pop() .push()
// 배열 요소 추가 및 제거 (맨 앞)
// .shift() .unshift

console.log(fruits);
console.log(fruits.pop());
//splice는 배열의 특정 위치 추가, 삭제 다 됨
fruits.splice(2, 0, "바나나", "귤");
// 1: 위치 , 2: 삭제요소 개수, 3 ~: 추가 요소
// 1번째 인자만 넣는 경우 위치부터 끝까지 삭제
console.log(fruits);
// .slice() 는 배열 추출
console.log(fruits.slice(2));
console.log(fruits.slice(1, 3));
