import Subjects from './React';

Subjects = {
  ...Subjects,
  interface Subjects.Teacher {
    experienceTeachingJava?: number;
  },
  class React {
    getRequirements(): string {
      return 'Here is the requirements for Java';
    }

    getAvailableTeacher(): string {
      if (Subjects.Teacher.experienceTeachingJava) {
        return `Available Teacher: ${Subjects.Teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }  
}
