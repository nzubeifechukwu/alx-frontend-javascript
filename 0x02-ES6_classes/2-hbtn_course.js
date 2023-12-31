/**
 * Implement a class named HolbertonClass with constructor attributes
 * name (String), length (Number) and students (array of Strings), stored in
 * an "underscore" version (e.g. name is stored in _name). Verify
 * attribute types during object creation. Implement a setter and getter for
 * each attribute
 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('students must be an array of strings');
    }
    for (const val of students) {
      if (typeof val !== 'string') {
        throw new TypeError('students must be an array of strings');
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('students must be an array of strings');
    }
    for (const val of students) {
      if (typeof val !== 'string') {
        throw new TypeError('students must be an array of strings');
      }
    }
    this._students = students;
  }
}
