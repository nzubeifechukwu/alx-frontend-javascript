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
  location: "Cameroon",
};

// studentsList is an array of students
const studentsList = [student_1, student_2];

const table = document.createElement("table");
let cell, cellText;

// For table heading
let row = document.createElement("tr");
for (const heading of ["First Name", "Location"]) {
  cell = document.createElement("th");
  cellText = document.createTextNode(heading);
  cell.appendChild(cellText);
  row.appendChild(cell);
  table.appendChild(row);
}

// For table data
for (const student of studentsList) {
  row = document.createElement("tr");
  for (i = 0; i < 2; i++) {
    cell = document.createElement("td");
    if (i === 0) {
      cellText = document.createTextNode(student.firstName);
      cell.appendChild(cellText);
      row.appendChild(cell);
    } else {
      cellText = document.createTextNode(student.location);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
  }
  table.appendChild(row);
}

document.body.appendChild(table);
// table.setAttribute("body", "2");
