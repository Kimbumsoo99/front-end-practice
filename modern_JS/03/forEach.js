const students = ["P", "K", "L", "A"];

students.forEach((students) => {
  console.log(students);
});
console.log("\n\n---");

// forEach는 배열 반복문

// for ... in 은 객체 반복문
const gilBook = {
  title: "깃&깃허브 입문",
  pubDate: "2019-12-06",
  pages: 272,
  finished: true,
};

for (key in gilBook) {
  console.log(`${key} : ${gilBook[key]}`);
}
console.log("\n\n---");

// for ... of는 배열같이 반복가능한 자료에서 사용 (forEach와 비슷)
for (student of students) {
  console.log(student);
}
console.log("\n\n---");
