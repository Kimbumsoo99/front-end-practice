// async 함수로 promise 연결하기
import fetch from "node-fetch";

async function whatsYourFavorite() {
  return "Javascript";
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

whatsYourFavorite().then(displaySubject).then(console.log);

// await 사용
async function init() {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
}

init();

// 특정 json 정보 가져오기
async function fetchJson() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
}

fetchJson();
