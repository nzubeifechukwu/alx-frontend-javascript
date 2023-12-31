// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Directors interface extends Teacher interface
interface Directors extends Teacher {
  numberOfReports: number;
}

/**
 * function printTeacher(firstName, lastName) returns the first letter of the
 * firstName and the full lastName
 */
function printTeacher(fn: (firstName: string, lastName: string) => string) {
  return `${firstName[0]}. ${lastName}`;
}

// printTeacherFunction interface
interface printTeacherFunction {
  printTeacher(firstName: string, lastName: string): string;
}

// StudentClass class
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// StudentClass constructor interface
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// StudentClass interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
