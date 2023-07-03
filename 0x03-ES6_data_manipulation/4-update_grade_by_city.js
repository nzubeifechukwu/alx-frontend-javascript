/**
 * function updateStudentGradeByCity
 * @students: list of objects with keys id, firstName, location; each object represents a student
 * @city: a given city
 * @newGrades: list of objects with keys studentId, grade; each object represents a student's grade
 * Return: list of objects with keys id, firstName, location, grade.
 * Each object in the returned array represents a student details.
 * If student doesn't have grade in @newGrades, the final grade should be N/A
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);
  const studentIds = newGrades.map((student) => student.studentId);
  const grades = newGrades.map((student) => student.grade);

  for (const student of studentsInCity) {
    if (studentIds.includes(student.id)) {
      student.grade = grades[studentIds.indexOf(student.id)];
    } else {
      student.grade = 'N/A';
    }
  }

  return studentsInCity;
}
