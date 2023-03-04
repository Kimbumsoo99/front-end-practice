function addNum(...numbers) {
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
}

console.log(addNum(1, 2, 3, 4, 5));
const fruits = ["사과", "오렌지", "포도"];
const mine = [...fruits];
console.log(mine);

const obj1 = {
  tep: "공백도 가능",
};
obj1["this blank"] = "첨 봄";
console.log(obj1);

// Symbol() 을 사용한 키는 forEach 같은것으로 접근이 안됨 (외부 공개 X)
// .map() 을 통해 배열 요소에 함수 적용 후 배열 반환 가능
const numbers1 = [1, 2, 3, 4, 5];
const newNumbers1 = numbers1.map((num, i) => i + num * 3);
console.log(newNumbers1);

//filter() 사용 시 배열 함수를 받아서 특정 조건 고를 수 있음
const scores = [90, 35, 64, 88, 43, 52];
const highScores = scores.filter((score, index) => {
  if (score >= 85) {
    console.log(`index : ${index}, score : ${score}`);
    return score;
  }
});
console.log(highScores);
//값 하나로 누적하는 .reduce() 메서드

const numbers2 = [1, 2, 3, 4, 5];
const result2 = numbers2.reduce((total, current) => total + current, 8); //8은 초기값
const result1 = numbers2.reduce((total, current) => total + current, 0);

console.log(result2);
console.log(result1);
