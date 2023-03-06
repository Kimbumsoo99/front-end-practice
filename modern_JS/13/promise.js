let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다.");
    //throw new Error("에러 발생");
  } else reject("피자를 주문하지 않습니다.");
});

pizza
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
  .finally(() => console.log("완료"));

// promise 대기 상태 pending
// 처리 성공 상태 fulfilled
// 처리 실패 상태 rejected
