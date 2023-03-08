let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다.");
    //throw new Error("에러 발생");
  } else reject("피자를 주문하지 않습니다.");
});

const promiseChain = () => console.log("피자를 만들고 있습니다.");

// promise 대기 상태 pending
// 처리 성공 상태 fulfilled
// 처리 실패 상태 rejected

const step1 = (msg) => {
  console.log(msg);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 도우 준비");
    }, 3000);
  });
};
const step2 = (msg) => {
  console.log(msg);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("토핑 완료");
    }, 1000);
  });
};
const step3 = (msg) => {
  console.log(msg);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("굽기 완료");
    }, 2000);
  });
};

const pizza2 = () => {
  return new Promise((resolve, reject) => {
    resolve("피자2를 주문합니다.");
  });
};

// pizza
//   .then((result) => console.log(result))
//   .then(promiseChain)
//   .catch((err) => console.error(err))
//   .finally(() => console.log("완료"));

pizza
  .then((result) => console.log(result))
  .then(promiseChain)
  .then(() => console.log("첫번째 완료"))
  .then((result) =>
    pizza2(result)
      .then(step1)
      .then(step2)
      .then(step3)
      .then((result) => console.log(result))
      .then(() => {
        console.log("피자가 준비되었습니다.");
      })
  );
