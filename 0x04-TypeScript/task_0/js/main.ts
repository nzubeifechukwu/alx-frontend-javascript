// Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Student objects
const student_1: Student = {
  firstName: 'Nzube',
  lastName: 'Ifechukwu',
  age: 31,
  location: 'Nigeria',
};

const student_2: Student = {
  firstName: 'Sylvia',
  lastName: 'Jitti',
  age: '25',
  location: 'Nigeria',
};

// studentsList is an array of students
const studentsList = [student_1, student_2];
