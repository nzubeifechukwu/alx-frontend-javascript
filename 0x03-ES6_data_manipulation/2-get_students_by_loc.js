/**
 * function getStudentsByLocation
 * @students: list of objects with properties id, firstName, location
 * @city: city
 * Return: array of @students located in a given @city, with each @student represented by an object
 */
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
