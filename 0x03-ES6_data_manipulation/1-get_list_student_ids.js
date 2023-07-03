/**
 * function getListStudentIds
 * @students: list of objects each with id, firstName and location keys to represent student info
 * Return an array of ids from @students
 */
export default function getListStudentIds(students) {
  return Array.isArray(students) ? students.map((student) => student.id) : [];
}
