// Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Student objects
const student_1: Student = {
  firstName: "Nzube",
  lastName: "Ifechukwu",
  age: 31,
  location: "Nigeria",
};

const student_2: Student = {
  firstName: "Sylvia",
  lastName: "Jitti",
  age: 25,
  location: "Nigeria",
};

// studentsList is an array of students
const studentsList = [student_1, student_2];

const table = document.createElement("table");
const tableBody = document.createElement("tbody");

for (let i = 0; i < studentsList.length; i++) {
  const row = document.createElement("tr");

  for (let j = 0; j < 2; j++) {
    const cell = document.createElement("td");
    const cellText = document.createTextNode(student_1.firstName);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }

  tableBody.appendChild(row);
}

table.appendChild(tableBody);

document.body.appendChild(table);

table.setAttribute("body", "2");
