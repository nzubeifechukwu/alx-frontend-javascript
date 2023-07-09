import Subjects from './Subject';

Subjects = {
  ...Subjects,
  interface Subjects.Teacher {  // declaration merging
    experienceTeachingC: number;
  },
  class Cpp extends Subjects.Subject {  // Cpp class extends Subject
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (Subjects.Teacher.experienceTeachingC) {
        return `Available Teacher: ${super.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
