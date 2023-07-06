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
