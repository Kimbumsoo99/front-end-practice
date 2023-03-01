const today = new Date();
console.log(today);
console.log(today.getDate());
console.log(new Date("2025-02-25"));
console.log(new Date("2025-02-25T18:00:00"));

const year = today.getFullYear();
const month = today.getMonth() + 1;
const dd = today.getDate();
const day1 = today.getDay();
let day2 = "";

switch (day1) {
  case 0:
    day2 = "일요일";
    break;
  case 1:
    day2 = "월요일";
    break;
  case 2:
    day2 = "화요일";
    break;
  case 3:
    day2 = "수요일";
    break;
  case 4:
    day2 = "목요일";
    break;
  case 5:
    day2 = "금요일";
    break;
  case 6:
    day2 = "토요일";
    break;
}

console.log(`${year}년 ${month}월 ${dd}일 ${day2}`);
console.log(today.toTimeString());

const clock = () => {
  let current = new Date();
  let hrs = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();

  let period = "AM";
  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  console.log(`${period} ${hrs}:${mins}:${secs}`);
};
setInterval(clock, 1000);
