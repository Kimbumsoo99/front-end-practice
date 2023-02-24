// 전개 구문
const fruits = ["apple", "banana", "grape"];
console.log(...fruits);

// 나머지 매개 변수
const addNum = (...numbers) => {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum;
};
console.log(addNum(1, 3), addNum(1, 3, 5, 7));
