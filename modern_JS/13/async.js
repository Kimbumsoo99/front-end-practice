// function displayA() {
//   console.log("A");
// }
// function displayB() {
//   console.log("B");
// }
// function displayC() {
//   console.log("C");
// }

// displayA();
// displayB();
// displayC();

function displayA() {
  console.log("A");
}
function displayB() {
  setTimeout(() => console.log("B"), 2000);
}
function displayC() {
  console.log("C");
}

displayA();
displayB();
displayC();
