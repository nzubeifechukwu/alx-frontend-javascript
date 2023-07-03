/**
 * function getStudentIdsSum
 * @students: list of objects with keys id, firstName, location; each object represents a student
 * Return: sum of all student ids
 */
export default function getStudentIdsSum(students) {
  return students.map((student) => student.id).reduce((acc, curr) => acc + curr);
}
