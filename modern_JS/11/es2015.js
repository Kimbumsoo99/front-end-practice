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
