// Subject class implements Teacher interface
import Subjects from './Teacher';

Subjects = {
  ...Subjects,
  export class Subject {
    constructor(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }

    set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}
