let xhr = new XMLHttpRequest();

const renderHTML = (contents) => {
  let output = "";
  for (let content of contents) {
    output += `
      <h2>${content.name}</h2>
      <ul>
        <li>전공 : ${content.major}</li>
        <li>학년 : ${content.grade}</li>
      </ul>
      <hr>`;
  }
  document.getElementById("result").innerHTML = output;
};

xhr.open("GET", "student-2.json");
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const students = JSON.parse(xhr.responseText);
    console.log(xhr.responseText);
    console.log(students);
    renderHTML(students);
  }
};
