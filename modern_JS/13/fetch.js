fetch("student-2.json")
  .then((res) => res.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += `
        <h2>${student.name}</h2>
        <ul>
          <li>전공 : ${student.major}</li>
          <li>학년 : ${student.grade}</li>
        </ul>
        <hr>
        `;
    });
    document.querySelector("#result").innerHTML = output;
  })
  .catch((error) => console.error(error));
