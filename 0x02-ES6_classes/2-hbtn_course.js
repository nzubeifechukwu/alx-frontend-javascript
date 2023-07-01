/**
 * Implement a class named HolbertonClass with constructor attributes
 * name (String), length (Number) and students (array of Strings), stored in
 * an "underscore" version (e.g. name is stored in _name). Verify
 * attribute types during object creation. Implement a setter and getter for
 * each attribute
 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    }
    if (typeof length === 'number') {
      this._length = length;
    }
    if (Array.isArray(students)) {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
  }
}
